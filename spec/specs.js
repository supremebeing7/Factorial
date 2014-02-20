describe('factorial', function() {
  it('makes 0 factorial equal to 1', function() {
    factorial(0).should.equal(1);
  });

  it('computes factorial of any number', function() {
    factorial(10).should.equal(3628800);
  });
});
