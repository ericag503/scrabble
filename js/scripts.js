var scrabble = function(word){
  var value1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
  var value2 = ["d", "g"];
  var value3 = ["b", "c", "m", "p"];
  var value4 = ["f", "h", "v", "w", "y"];
  var value5 = ["k"];
  var value8 = ["j", "x"];
  var value10 = ["q", "z"];
  var array = [];
  var wordArray = word.split("");
  var result;

  for (i=0; i< wordArray.length; i++){
    if (value1.indexOf(wordArray[i]) >= 0){
      result = 1
      array.push(result);

    }
  };
  return array;
};

