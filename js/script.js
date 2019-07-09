var roman = function(sentence){
  var romannumber
  var numerals = ["I","V","X","L","C","D","M"]
  var numerals2 = ["I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
  var numerals3 = ["X", "XX", "XXX", "XL", "LX", "LXX","LXXX", "XC"]
  var numerals4 = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  var numerals5 = ["M", "MM", "MMM", "MMMM", "MMMMM", "VM", "VMM", "VMMMM", "VMMMMM"]
  var number = ["1","5","10","50","100","500","1000"]
  // var splitstring = sentence.split("");
  var newWord = sentence.split("");
  for(x=0; x < number.length; x++){
     if (sentence===number[x]){
       console.log(numerals[x]);
       romannumber=numerals[x]
     }
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
