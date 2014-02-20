var factorial = function(number) {
  if (number === 0) {
    return 1;
  };

  var result = 1;
  if (number >= 1) {
    for (var i = 1; i <= number; i++) {
      result *= i;
    };
    return result;
  };
};
