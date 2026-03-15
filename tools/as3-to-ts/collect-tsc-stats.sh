#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_FILE="${1:-tsc_output.log}"

cd "$ROOT_DIR"

npx tsc --pretty false > "$LOG_FILE" 2>&1 || true

total_errors="$( (grep "error TS" "$LOG_FILE" || true) | wc -l | tr -d ' ')"
printf 'Total errors: %s\n' "$total_errors"

printf 'Top-5 files:\n'
(grep "error TS" "$LOG_FILE" || true) | cut -d'(' -f1 | sort | uniq -c | sort -nr | head -n 5 || true

printf '\nTop error codes:\n'
(grep -o "TS[0-9]\+" "$LOG_FILE" || true) | sort | uniq -c | sort -nr | head -n 10 || true

printf '\nclass_25.ts sample:\n'
grep "class_25.ts" "$LOG_FILE" | head -n 20 || true

printf '\nTankViewerScreen.ts sample:\n'
grep "TankViewerScreen.ts" "$LOG_FILE" | head -n 20 || true
