var roman = function(sentence){
  var numerals = ["I","V","X","L","C","D","M"]

// user interface logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = roman(words)
    $('#output').append(splitstring)
  })
});
