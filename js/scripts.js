var factorial = function(number) {
  if (number === 0) {
    return 1;
  };

  if (number >= 1) {
    console.log(number);
    return number * factorial(number -1);
  };
};
