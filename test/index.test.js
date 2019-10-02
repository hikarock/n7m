const a10n = require('../index');

test('internationalization to be i18n', () => {
  expect(a10n('internationalization')).toBe('i18n');
});
test('kubernetes to be k8s', () => {
  expect(a10n('kubernetes')).toBe('k8s');
});
test('a to be a', () => {
  expect(a10n('a')).toBe('a');
});
test('ab to be ab', () => {
  expect(a10n('ab')).toBe('ab');
});
test('abc to be a1c', () => {
  expect(a10n('abc')).toBe('a1c');
});
test('こ to be こ', () => {
  expect(a10n('こ')).toBe('こ');
});
test('こん to be こん', () => {
  expect(a10n('こん')).toBe('こん');
});
test('こんに to be こ1に', () => {
  expect(a10n('こんに')).toBe('こ1に');
});
test('こんにち to be こ2ち', () => {
  expect(a10n('こんにち')).toBe('こ2ち');
});
test('こんにちは to be こ3は', () => {
  expect(a10n('こんにちは')).toBe('こ3は');
});
test('😂 to be 😂', () => {
  expect(a10n('😂')).toBe('😂');
});
test('😂🙄 to be 😂🙄', () => {
  expect(a10n('😂🙄')).toBe('😂🙄');
});
test('😂🙄😇 to be 😂1😇', () => {
  expect(a10n('😂🙄😇')).toBe('😂1😇');
});
