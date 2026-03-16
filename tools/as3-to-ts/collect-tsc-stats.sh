#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_FILE="${1:-tsc_output.log}"
ERROR_SLICE_RADIUS="${ERROR_SLICE_RADIUS:-10}"
MAX_ERROR_CONTEXTS="${MAX_ERROR_CONTEXTS:-50}"

if [[ "$LOG_FILE" != /* ]]; then
  LOG_FILE="$ROOT_DIR/$LOG_FILE"
fi

cd "$ROOT_DIR"

if [[ -f "$LOG_FILE" ]]; then
  printf 'Using existing log: %s\n' "$LOG_FILE"
else
  printf 'Generating log via npx tsc: %s\n' "$LOG_FILE"
  npx tsc --pretty false > "$LOG_FILE" 2>&1 || true
fi

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

print_context_slice() {
  local file_path="$1"
  local line_number="$2"
  local radius="$3"
  local label="$4"

  if [[ ! -f "$file_path" ]]; then
    printf '  [%s] file not found: %s\n' "$label" "$file_path"
    return
  fi

  local total_lines start_line end_line
  total_lines="$(wc -l < "$file_path" | tr -d ' ')"

  start_line=$((line_number - radius))
  if (( start_line < 1 )); then
    start_line=1
  fi

  end_line=$((line_number + radius))
  if (( end_line > total_lines )); then
    end_line="$total_lines"
  fi

  printf '  [%s] %s (line %s, context %s-%s):\n' "$label" "$file_path" "$line_number" "$start_line" "$end_line"
  awk -v start="$start_line" -v end="$end_line" -v err_line="$line_number" '
    NR >= start && NR <= end {
      marker = (NR == err_line) ? " >>" : "   "
      printf("%s %6d | %s\n", marker, NR, $0)
    }
  ' "$file_path"
}

resolve_as_source() {
  local ts_path="$1"
  local candidate rel

  if [[ "$ts_path" == migrated-ts/* ]]; then
    rel="${ts_path#migrated-ts/}"
    candidate="scripts/${rel%.ts}.as"
    if [[ -f "$candidate" ]]; then
      printf '%s\n' "$candidate"
      return
    fi
  fi

  candidate="${ts_path%.ts}.as"
  if [[ -f "$candidate" ]]; then
    printf '%s\n' "$candidate"
    return
  fi

  printf '\n'
}

printf '\nDetailed TS/AS error contexts (±%s lines, max %s entries):\n' "$ERROR_SLICE_RADIUS" "$MAX_ERROR_CONTEXTS"

error_context_count=0
while IFS= read -r error_line; do
  if [[ -z "$error_line" ]]; then
    continue
  fi

  if (( error_context_count >= MAX_ERROR_CONTEXTS )); then
    printf '\nReached MAX_ERROR_CONTEXTS=%s, stopping detailed dump.\n' "$MAX_ERROR_CONTEXTS"
    break
  fi

  if [[ "$error_line" =~ ^(.+)\(([0-9]+),([0-9]+)\):[[:space:]]error[[:space:]](TS[0-9]+):[[:space:]](.*)$ ]]; then
    ts_file="${BASH_REMATCH[1]}"
    err_line_no="${BASH_REMATCH[2]}"
    err_col_no="${BASH_REMATCH[3]}"
    err_code="${BASH_REMATCH[4]}"
    err_message="${BASH_REMATCH[5]}"
  else
    continue
  fi

  error_context_count=$((error_context_count + 1))
  printf '\n[%s/%s] %s:%s:%s %s %s\n' \
    "$error_context_count" "$MAX_ERROR_CONTEXTS" "$ts_file" "$err_line_no" "$err_col_no" "$err_code" "$err_message"

  print_context_slice "$ts_file" "$err_line_no" "$ERROR_SLICE_RADIUS" "TS"

  as_source_path="$(resolve_as_source "$ts_file")"
  if [[ -n "$as_source_path" ]]; then
    print_context_slice "$as_source_path" "$err_line_no" "$ERROR_SLICE_RADIUS" "AS"
  else
    printf '  [AS] matching source not found for: %s\n' "$ts_file"
  fi
done < <(grep "error TS" "$LOG_FILE" || true)

if (( error_context_count == 0 )); then
  printf 'No file-level TypeScript errors were parsed from the log.\n'
fi
