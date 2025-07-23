const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a-b
};

const sum = function(array) {
  let cumul = 0
	for (let index = 0; index < array.length; index++) {
    cumul+=array[index];
  }
  return cumul
};

const multiply = function(array) {
  let cumul = 1
	for (let index = 0; index < array.length; index++) {
    cumul*=array[index];
  }
  return cumul
};

const power = function(a, b) {
	return a**b
};

const factorial = function(number) {
	let result = 1;

  for (let i = 2; i <= number; i++) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
