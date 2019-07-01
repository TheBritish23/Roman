// user interface logic
$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = numerals(words)
    $('#output').append(splitstring)
  })
});
