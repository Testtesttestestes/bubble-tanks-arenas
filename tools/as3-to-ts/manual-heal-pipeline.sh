#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
WORK_DIR="${WORK_DIR:-$ROOT_DIR/migrated-ts}"
TARGET="${1:-all}" # all | core | agi
SKIP_CONVERT="${SKIP_CONVERT:-0}"
BUILD_MANIFEST="${BUILD_MANIFEST:-1}"
SUMMARY_FILE="${SUMMARY_FILE:-$ROOT_DIR/tmp/manual-heal-summary.md}"
BUILD_STATUS="not-run"

cd "$ROOT_DIR"

mkdir -p "$(dirname "$SUMMARY_FILE")"

run_convert() {
  printf '\n[1/5] Conversion + auto-fixes (target=%s)\n' "$TARGET"
  if [[ "$SKIP_CONVERT" == "1" ]]; then
    printf 'SKIP_CONVERT=1 -> conversion skipped.\n'
    return
  fi

  case "$TARGET" in
    all)
      npm run convert:full
      ;;
    core)
      node tools/as3-to-ts/convert-as3-to-ts.js --input scripts --output "$WORK_DIR"
      ;;
    agi)
      node tools/as3-to-ts/convert-as3-to-ts.js --input "binaryData/AGI decomp/scripts" --output "$WORK_DIR/agi"
      ;;
    *)
      printf 'Unknown target: %s (allowed: all|core|agi)\n' "$TARGET" >&2
      exit 1
      ;;
  esac

  npm run fix:implicit-this -- --input "$WORK_DIR"
  node tools/as3-to-ts/heal-signature-params.js --input "$WORK_DIR"
  node tools/as3-to-ts/fix-class-signatures.js --input "$WORK_DIR" --scope agi
  node tools/as3-to-ts/fix-ts2695-sequences.js --input "$WORK_DIR"
  node tools/as3-to-ts/resolve-imports.js --input "$WORK_DIR"
}

run_typecheck_stats() {
  printf '\n[2/5] TypeScript diagnostics snapshot\n'
  npm run tsc:stats -- "tmp/tsc-manual-heal.log" | tee "tmp/tsc-manual-heal.stats.txt"
}

run_manifest() {
  printf '\n[3/5] Runtime manifest rebuild\n'
  if [[ "$BUILD_MANIFEST" == "1" ]]; then
    npm run build:migrated-manifest
  else
    printf 'BUILD_MANIFEST=0 -> skipped.\n'
  fi
}

run_build_smoke() {
  printf '\n[4/5] Browser build smoke test\n'
  npm run build >/tmp/manual-heal-vite-build.log 2>&1 || {
    printf 'Vite build failed. See /tmp/manual-heal-vite-build.log\n'
    BUILD_STATUS="failed"
    return 0
  }
  printf 'Vite build OK.\n'
  BUILD_STATUS="ok"
}

write_summary() {
  printf '\n[5/5] Writing summary: %s\n' "$SUMMARY_FILE"
  {
    echo "# Manual heal pipeline summary"
    echo
    echo "- Date (UTC): $(date -u +"%Y-%m-%d %H:%M:%S")"
    echo "- Target: $TARGET"
    echo "- Work dir: $WORK_DIR"
    echo "- Skip convert: $SKIP_CONVERT"
    echo "- Build manifest: $BUILD_MANIFEST"
    echo "- Build smoke: $BUILD_STATUS"
    echo
    echo "## Next manual loop"
    echo "1. Open \`tmp/tsc-manual-heal.stats.txt\` and pick top file+error pair."
    echo "2. Compare TS file with original AS equivalent."
    echo "3. Patch only the selected class/function."
    echo "4. Run \`npm run typecheck\` and \`npm run build\`."
    echo "5. Repeat until compile + runtime are stable."
  } > "$SUMMARY_FILE"
}

run_convert
run_typecheck_stats
run_manifest
run_build_smoke
write_summary

printf '\nManual heal pipeline finished.\n'
