describe('scrabble', function() {
  // it('it takes a letter and returns a number', function() {
  //   scrabble("a").should.eql([1]);
  // });
  // it('takes two letters and returns the value of each letter', function() {
  //   scrabble("at").should.eql([1,1]);
  // });
  // it('takes letters of different value and returns the value of each letter', function() {
  //   scrabble("jack").should.eql([8,1,3,5]);
  // });
  it('takes a word and returns the value of the word', function() {
    scrabble("at").should.equal(2);
  })
});
