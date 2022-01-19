const { someFunctionSync } = require('../src/index')

it('should return Hello Word sync', () => {
  expect(someFunctionSync()).toBe('Hello Word')
});