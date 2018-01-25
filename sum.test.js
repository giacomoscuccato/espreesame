const getSum = require('./sum.js');

var arrayTest = [2,3];
test('area right parameters', () => {
  expect(getSum(arrayTest)).toBe(5);
});

var arrayTest2 = [-1,-1];
test('negative parameters', () => {
  expect(getSum(arrayTest2)).toBe(-1);
});

var arrayTest3 = [0,1];
test('test zero right case', () => {
  expect(getSum(arrayTest3)).toBe(1);
});

var arrayTest4 = [0,-11];
test('test zero not valid case', () => {
  expect(getSum(arrayTest4)).toBe(-1);
});

var arrayTestNotNumber = [2,"a"];
test('error one number one string into array', () => {
  expect(getSum(arrayTestNotNumber)).toBe(-1);
});

var arrayTestNotNumber2 = ["a","a"];
test('error not a number array element', () => {
  expect(getSum(arrayTestNotNumber2)).toBe(-1);
});


test('error not array and different number of parameters', () => {
  expect(getSum("a", "b")).toBe(-1);
});
