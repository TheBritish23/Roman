var roman = function(sentence){
  var romannumber
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
     if (words.length===4) {
       roman.push(ones[words[0]])
       roman.push(tens[words[1]])
       roman.push(hundreds[words[2]])
       roman.push(thousands[words[3]])
     }
     var roman;
   }
    return romannumber;
  }

// user interface logic
$(document).ready(function() {
  console.log("roman")
  $("form#roman").submit(function(event) {
    console.log("roman")
    event.preventDefault();
    var words = $('#words').val()
    var splitstring = roman(words)
    $('#output').append(splitstring)
    $("#result").text(splitstring);
  })
 });
