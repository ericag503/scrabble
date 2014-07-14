describe('scrabble', function() {
  it('it takes a letter and returns a number', function() {
    scrabble("a").should.equal(1);
  });
  it('takes two letters and returns the value of each added together', function() {
    scrabble("at").should.equal(2);
  });

});
