const n7m = require('../index')

test('internationalization to be i18n', () => {
  expect(n7m('internationalization')).toBe('i18n')
})
test('kubernetes to be k8s', () => {
  expect(n7m('kubernetes')).toBe('k8s')
})
test('a to be a', () => {
  expect(n7m('a')).toBe('a')
})
test('ab to be ab', () => {
  expect(n7m('ab')).toBe('ab')
})
test('abc to be a1c', () => {
  expect(n7m('abc')).toBe('a1c')
})
test('1 to be 1', () => {
  expect(n7m(1)).toBe('1')
})
test('12 to be 12', () => {
  expect(n7m(12)).toBe('12')
})
test('123 to be 113', () => {
  expect(n7m(123)).toBe('113')
})
test('null to be ""', () => {
  expect(n7m(null)).toBe('')
})
test('undefined to be ""', () => {
  expect(n7m(undefined)).toBe('')
})
test('array to be ""', () => {
  expect(n7m(['foo', 'bar'])).toBe('')
})
test('object to be ""', () => {
  expect(n7m({ foo: 'bar' })).toBe('')
})
test('object to be ""', () => {
  expect(n7m(new Object())).toBe('')
})
test('こ to be こ', () => {
  expect(n7m('こ')).toBe('こ')
})
test('こん to be こん', () => {
  expect(n7m('こん')).toBe('こん')
})
test('こんに to be こ1に', () => {
  expect(n7m('こんに')).toBe('こ1に')
})
test('こんにち to be こ2ち', () => {
  expect(n7m('こんにち')).toBe('こ2ち')
})
test('こんにちは to be こ3は', () => {
  expect(n7m('こんにちは')).toBe('こ3は')
})
test('😂 to be 😂', () => {
  expect(n7m('😂')).toBe('😂')
})
test('😂🙄 to be 😂🙄', () => {
  expect(n7m('😂🙄')).toBe('😂🙄')
})
test('😂🙄😇 to be 😂1😇', () => {
  expect(n7m('😂🙄😇')).toBe('😂1😇')
})
