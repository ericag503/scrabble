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

  for (var i=0; i< wordArray.length; i++){
    if (value1.indexOf(wordArray[i]) >= 0){
      result = 1
      array.push(result);

    } else if (value2.indexOf(wordArray[i]) >= 0){
      result = 2
      array.push(result);

    } else if (value3.indexOf(wordArray[i]) >= 0){
      result = 3
      array.push(result);

    } else if (value4.indexOf(wordArray[i]) >= 0){
      result = 4
      array.push(result);

    } else if (value5.indexOf(wordArray[i]) >= 0){
      result = 5
     array.push(result);

    } else if (value8.indexOf(wordArray[i]) >= 0){
      result = 8
      array.push(result);

    } else if (value10.indexOf(wordArray[i]) >= 0){
      result = 10
      array.push(result);
    } else {
      break;
    }
  };
  //return array;

  var total = 0;
  array.forEach(function(array1) {
    total += array1 ;
  });
  return total;
};



$(document).ready(function(){
  $("form#scrabble").submit(function(event){
    var input = $("input#words").val();
    var result = scrabble(input);

    $(".score").text(result);


    event.preventDefault();
  });

});


