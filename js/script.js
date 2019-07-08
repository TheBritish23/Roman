var roman = function(sentence){
  console.log("roman")
  var numerals = ["I","V","X","L","C","D","M"]
  var number = ["1","5","10","50","100","500","1000"]
  // var splitstring = sentence.split("");
  var newWord = sentence.split("");
  for(x=0; x < numbers.length; x++){
    console.log(x);
     if (sentence===number[x]){
       console.log(x);
     }
   }
    return newWord;
// user interface logic
$(document).ready(function() {
  $("form#roman").submit(function(event) {
    console.log("roman")
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = roman(words)
    $('#output').append(splitstring)
  })
 });
}
