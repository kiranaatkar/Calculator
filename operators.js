const add = function () {
  return arguments[0] + arguments[1];
};

const subtract = function () {
  return arguments[0] - arguments[1];
};

const multiply = function () {
  return arguments[0].reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function () {
  return arguments[0] ** arguments[1];
};
