describe('factorial', function() {
  it('makes 0 factorial equal to 1', function() {
    factorial(0).should.equal(1);
  });

  it('computes factorial of a number using recursion', function() {
    factorial(10).should.equal(3628800);
  });

  it('Gives error when trying to compute factorial of a negative number using recursion', function() {
    factorial(-1).should.equal(false);
  });

  it('Return false if given a decimal', function() {
    factorial(1.5).should.equal(false);
  })
});

