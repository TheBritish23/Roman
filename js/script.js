var roman = function(sentence){
  var numerals = ["I","V","X","L","C","D","M"]
  var number = ["1","5","10","50","100","500","1000"]
  // var splitstring = sentence.split("");
  var newWord;
  for(x=0; x < splitstring.length; x++){
    numerals.forEach(function(letter){
     if (splitstring[0]===letter){
       console.log(x);
     });
    };
  }
    return newWord;
// user interface logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = roman(words)
    $('#output').append(splitstring)
  })
});
