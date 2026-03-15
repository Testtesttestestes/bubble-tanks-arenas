import * as Phaser from 'phaser';

export interface MigratedManifestEntry {
  className: string;
  sourcePath: string;
  dependencies: string[];
  assetCandidates: string[];
}

export interface MigratedManifest {
  generatedAt: string;
  totalEntries: number;
  entries: MigratedManifestEntry[];
}

interface PreloadSummary {
  loadedAssetCount: number;
  skippedAssetCount: number;
}

export class MigratedPhaserPipeline {
  public static preloadFromManifest(
    scene: Phaser.Scene,
    manifest: MigratedManifest,
    includeClasses: string[] = [],
  ): PreloadSummary {
    const loaded = new Set<string>();
    const includeSet = new Set(includeClasses);
    let skippedAssetCount = 0;

    for (const entry of manifest.entries) {
      if (includeSet.size > 0 && !includeSet.has(entry.className)) {
        continue;
      }

      for (const assetPath of entry.assetCandidates) {
        if (loaded.has(assetPath)) {
          skippedAssetCount += 1;
          continue;
        }

        const key = this.makeAssetKey(entry.className, assetPath);
        if (scene.textures.exists(key)) {
          skippedAssetCount += 1;
          loaded.add(assetPath);
          continue;
        }

        scene.load.image(key, assetPath);
        loaded.add(assetPath);
      }
    }

    return {
      loadedAssetCount: loaded.size,
      skippedAssetCount,
    };
  }

  private static makeAssetKey(className: string, assetPath: string): string {
    const normalizedAssetPath = assetPath
      .replace(/\.[a-z]+$/i, '')
      .replace(/[^a-zA-Z0-9]+/g, '_');
    return `legacy_${className.replace(/[^a-zA-Z0-9]+/g, '_')}_${normalizedAssetPath}`;
  }
}
