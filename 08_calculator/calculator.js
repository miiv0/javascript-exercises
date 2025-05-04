const add = function (digit, digit2) {
  const result = digit + digit2;
  return result;
};

const subtract = function (digit, digit2) {
  const result = digit - digit2;
  return result;
};

const sum = function () {
  array = arguments[0];
  console.log("array" + array);
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function (digit, digit2) {
  const result = digit * digit2;
  return result;
};

const power = function (digit, digit2) {
  let result = 1;
  for (let i = 0; i < digit2; i++) {
    result *= digit;
  }
  return result;
}

const factorial = function (digit, digit2) {

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
