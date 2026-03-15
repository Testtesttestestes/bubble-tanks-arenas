#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
INPUT_DIR="${1:-scripts}"
OUTPUT_DIR="${2:-/tmp/bta-migrated}"
LOG_FILE="$OUTPUT_DIR/tsc_output.log"

cd "$ROOT_DIR"

rm -rf "$OUTPUT_DIR"

node tools/as3-to-ts/convert-as3-to-ts.js --input "$INPUT_DIR" --output "$OUTPUT_DIR"
node tools/as3-to-ts/fix-implicit-this.js --input "$OUTPUT_DIR"
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
