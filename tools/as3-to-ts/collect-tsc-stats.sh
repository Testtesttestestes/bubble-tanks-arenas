#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LOG_FILE="${1:-tsc_output.log}"
ERROR_SLICE_RADIUS="${ERROR_SLICE_RADIUS:-10}"
MAX_ERROR_CONTEXTS="${MAX_ERROR_CONTEXTS:-20}"
MAX_AGI_ERROR_CONTEXTS="${MAX_AGI_ERROR_CONTEXTS:-10}"
MAX_ERROR_MESSAGES_PER_CODE="${MAX_ERROR_MESSAGES_PER_CODE:-5}"

if [[ "$LOG_FILE" != /* ]]; then
  LOG_FILE="$ROOT_DIR/$LOG_FILE"
fi

cd "$ROOT_DIR"

error_stream() {
  grep "error TS" "$LOG_FILE" || true
}

if [[ -f "$LOG_FILE" ]]; then
  printf 'Using existing log: %s\n' "$LOG_FILE"
else
  printf 'Generating log via npx tsc: %s\n' "$LOG_FILE"
  npx tsc --pretty false > "$LOG_FILE" 2>&1 || true
fi

total_errors="$(error_stream | wc -l | tr -d ' ')"
printf 'Total errors: %s\n' "$total_errors"

printf 'Top-10 files:\n'
error_stream | cut -d'(' -f1 | sort | uniq -c | sort -nr | head -n 10 || true

printf '\nTop error codes:\n'
(error_stream | grep -o "TS[0-9]\+" || true) | sort | uniq -c | sort -nr | head -n 15 || true

printf '\nTop file+code pairs:\n'
error_stream | sed -E 's#^(.+)\([0-9]+,[0-9]+\): error (TS[0-9]+):.*$#\1 :: \2#' | sort | uniq -c | sort -nr | head -n 20 || true

printf '\nError code details (top messages per code, max %s):\n' "$MAX_ERROR_MESSAGES_PER_CODE"
for code in $( (error_stream | grep -o "TS[0-9]\+" || true) | sort -u ); do
  total_for_code="$(error_stream | grep -c "error ${code}:" || true)"
  printf '%s total=%s\n' "$code" "$total_for_code"
  (error_stream | awk -v code="$code" 'index($0, "error " code ":") { sub(/^.*error [A-Z0-9]+: /, "", $0); print }' || true) | \
    sort | uniq -c | sort -nr | head -n "$MAX_ERROR_MESSAGES_PER_CODE" | sed -E 's/^/      /' || true
  printf '\n'
done

resolve_ts_path() {
  local ts_path="$1"

  if [[ -f "$ts_path" ]]; then
    printf '%s\n' "$ts_path"
    return
  fi

  if [[ -f "$ROOT_DIR/$ts_path" ]]; then
    printf '%s\n' "$ROOT_DIR/$ts_path"
    return
  fi

  if [[ -f "$ROOT_DIR/migrated-ts/$ts_path" ]]; then
    printf '%s\n' "$ROOT_DIR/migrated-ts/$ts_path"
    return
  fi

  printf '%s\n' "$ts_path"
}

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

print_error_pointer() {
  local line_number="$1"
  local col_number="$2"

  if (( col_number < 1 )); then
    col_number=1
  fi

  printf '  [TS] %6s | %*s^\n' "$line_number" "$col_number" ''
}

resolve_as_source() {
  local ts_path="$1"
  local rel candidate

  rel="$ts_path"
  rel="${rel#${ROOT_DIR}/}"
  rel="${rel#migrated-ts/}"

  if [[ "$rel" == agi/* ]]; then
    candidate="binaryData/AGI decomp/scripts/${rel#agi/}"
    candidate="${candidate%.ts}.as"
    if [[ -f "$candidate" ]]; then
      printf '%s\n' "$candidate"
      return
    fi
  else
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

print_detailed_contexts() {
  local filter_regex="$1"
  local max_contexts="$2"
  local section_title="$3"
  local error_context_count=0

  if [[ -n "$section_title" ]]; then
    printf '\n%s\n' "$section_title"
  fi

  while IFS= read -r error_line; do
  if [[ -z "$error_line" ]]; then
    continue
  fi

  if [[ -n "$filter_regex" ]] && [[ ! "$error_line" =~ $filter_regex ]]; then
    continue
  fi

  if (( error_context_count >= max_contexts )); then
    printf '\nReached max contexts=%s, stopping detailed dump.\n' "$max_contexts"
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
    "$error_context_count" "$max_contexts" "$ts_file" "$err_line_no" "$err_col_no" "$err_code" "$err_message"

  ts_file_resolved="$(resolve_ts_path "$ts_file")"
  print_context_slice "$ts_file_resolved" "$err_line_no" "$ERROR_SLICE_RADIUS" "TS"
  print_error_pointer "$err_line_no" "$err_col_no"

  as_source_path="$(resolve_as_source "$ts_file")"
  if [[ -n "$as_source_path" ]]; then
    print_context_slice "$as_source_path" "$err_line_no" "$ERROR_SLICE_RADIUS" "AS"
  else
    printf '  [AS] matching source not found for: %s\n' "$ts_file"
  fi
  done < <(error_stream)

  if (( error_context_count == 0 )); then
    printf 'No file-level TypeScript errors were parsed for this section.\n'
  fi
}

print_detailed_contexts '' "$MAX_ERROR_CONTEXTS" ''

agi_error_count="$(error_stream | grep -Ec '(^|/)agi/' || true)"
if (( agi_error_count > 0 )); then
  print_detailed_contexts '(^|/)agi/' "$MAX_AGI_ERROR_CONTEXTS" "Detailed AGI TS/AS error contexts (±${ERROR_SLICE_RADIUS} lines, max ${MAX_AGI_ERROR_CONTEXTS} entries):"
else
  printf '\nDetailed AGI TS/AS error contexts: no AGI errors detected in log.\n'
fi
