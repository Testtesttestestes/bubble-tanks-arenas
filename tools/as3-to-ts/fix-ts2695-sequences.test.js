const test = require('node:test');
const assert = require('node:assert/strict');

const { transformBase64CommaAssignments } = require('./fix-ts2695-sequences');

test('transforms Base64 comma assignments with nested function calls', () => {
  const input = 'const value = (_loc3_ = fn(a, wrap(b, c)), _loc3_ + 1);';
  const { content, replacements } = transformBase64CommaAssignments(input);

  assert.equal(replacements, 1);
  assert.match(content, /\(\(\) => \{ _loc3_ = fn\(a, wrap\(b, c\)\); return _loc3_ \+ 1; \}\)\(\)/);
});
