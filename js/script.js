var roman = function(sentence){
  var romannumber = []
  var numerals = ["I","V","X","L","C","D","M"]
  var ones = ["","I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  var tens = ["","X", "XX", "XXX", "XL", "LX", "LXX","LXXX", "XC"]
  var hundreds = ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  var thousands = ["","M", "MM", "MMM"]
  var number = ["1","5","10","50","100","500","1000"]
  // var splitstring = sentence.split("");
  var newWord = sentence.split("");
  for(x=0; x < number.length; x++){
     if (sentence===number[x]){
       console.log(numerals[x]);
       romannumber=numerals[x]
     }
     }
     if (newWord.length===4) {
       romannumber.push(thousands[newWord[0]])
       romannumber.push(hundreds[newWord[1]])
       romannumber.push(tens[newWord[2]])
       romannumber.push(ones[newWord[3]])
       console.log(romannumber)
   }
    return romannumber;
  }

// user interface logic
$(document).ready(function() {
  $("form#roman").submit(function(event) {
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = roman(words)
    $('#output').append(splitstring)
    $("#result").text(splitstring);
  })
 });
