#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
INPUT_DIR="${1:-scripts}"
OUTPUT_DIR="${2:-/tmp/bta-migrated}"
LOG_FILE="$OUTPUT_DIR/tsc_output.log"
AGI_INPUT_DIR="binaryData/AGI decomp/scripts"

cd "$ROOT_DIR"

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

node tools/as3-to-ts/convert-as3-to-ts.js --input "$INPUT_DIR" --output "$OUTPUT_DIR"

if [[ -d "$AGI_INPUT_DIR" ]]; then
  node tools/as3-to-ts/convert-as3-to-ts.js --input "$AGI_INPUT_DIR" --output "$OUTPUT_DIR/agi"
else
  printf 'AGI scripts directory not found, skipping: %s\n' "$AGI_INPUT_DIR"
fi

node tools/as3-to-ts/fix-implicit-this.js --input "$OUTPUT_DIR"
node tools/as3-to-ts/heal-signature-params.js --input "$OUTPUT_DIR"
node tools/as3-to-ts/resolve-imports.js --input "$OUTPUT_DIR"
# Restore `default:` switch labels that can be mistakenly prefixed by implicit-this fixer.
find "$OUTPUT_DIR" -type f -name "*.ts" -exec sed -i 's/\bthis\.default\s*:/default:/g' {} +
cp flash-shims.d.ts "$OUTPUT_DIR/"

cat > "$OUTPUT_DIR/tsconfig.json" <<'JSON'
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "CommonJS",
    "strict": false,
    "noImplicitAny": false,
    "skipLibCheck": true,
    "lib": ["DOM", "ES2022"]
  },
  "include": ["**/*.ts"]
}
JSON

(
  cd "$OUTPUT_DIR"
  npx tsc --pretty false > "$LOG_FILE" 2>&1 || true
)

npm run tsc:stats -- "$LOG_FILE"
