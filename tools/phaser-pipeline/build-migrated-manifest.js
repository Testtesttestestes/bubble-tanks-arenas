#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const repoRoot = path.resolve(__dirname, '..', '..');
const migratedRoot = path.join(repoRoot, 'migrated-ts');
const outputPath = path.join(
  repoRoot,
  'src',
  'game',
  'runtime',
  'generated',
  'migrated-manifest.json',
);

function walk(dir) {
  const out = [];
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else {
        out.push(full);
      }
    }
  }
  return out;
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function parseClasses(source) {
  const matches = source.matchAll(/export\s+(?:class|interface)\s+([A-Za-z0-9_$.]+)/g);
  return [...matches].map((match) => match[1]);
}

function parseDependencies(source) {
  const deps = new Set();
  const depRegex = /\b(class_\d+|BTA_fla\.[A-Za-z0-9_]+|Parts\.[A-Za-z0-9_]+|package_\d+\.class_\d+)\b/g;
  for (const match of source.matchAll(depRegex)) {
    deps.add(match[1]);
  }
  return [...deps];
}

function toUnixPath(filePath) {
  return filePath.split(path.sep).join('/');
}

function buildAssetIndex() {
  const roots = ['images', 'sprites', 'frames'];
  const assets = [];
  for (const root of roots) {
    const fullRoot = path.join(repoRoot, root);
    if (!fs.existsSync(fullRoot)) {
      continue;
    }
    for (const file of walk(fullRoot)) {
      const ext = path.extname(file).toLowerCase();
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.webp') {
        continue;
      }
      assets.push(toUnixPath(path.relative(repoRoot, file)));
    }
  }
  return assets;
}

function buildManifest() {
  const allTsFiles = walk(migratedRoot).filter((file) => file.endsWith('.ts'));
  const assets = buildAssetIndex();

  const entries = [];
  for (const absFilePath of allTsFiles) {
    const content = readText(absFilePath);
    const classes = parseClasses(content);
    if (classes.length === 0) {
      continue;
    }

    for (const className of classes) {
      const tokens = new Set([className, className.replace(/\./g, '_')]);
      const matchedAssets = assets.filter((assetPath) => {
        const normalized = assetPath.toLowerCase();
        for (const token of tokens) {
          if (normalized.includes(token.toLowerCase())) {
            return true;
          }
        }
        return false;
      });

      entries.push({
        className,
        sourcePath: toUnixPath(path.relative(repoRoot, absFilePath)),
        dependencies: parseDependencies(content).filter((dep) => dep !== className),
        assetCandidates: matchedAssets.slice(0, 40),
      });
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    totalEntries: entries.length,
    entries,
  };
}

const manifest = buildManifest();
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Manifest written: ${path.relative(repoRoot, outputPath)} (${manifest.totalEntries} entries)`);
