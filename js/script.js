var roman = function(sentence){
  var numerals = ["I","V","X","L","C","D","M"]
  var romannumber=[["","I","II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
   ["","X", "XX", "XXX", "XL", "L", "LX", "LXX","LXXX", "XC"],
   ["","C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
   ["","M", "MM", "MMM"]]
  var number = ["1","5","10","50","100","500","1000"]
  // var splitstring = sentence.split("");
  var newWord = sentence.split("");
  // for(x=0; x < number.length; x++){
  //    if (sentence===number[x]){
  //      console.log(numerals[x]);
  //      romannumber=numerals[x]
  //    }
  //    }
  //    if (newWord.length===4) {
  //      romannumber.push(thousands[newWord[0]])
  //      romannumber.push(hundreds[newWord[1]])
  //      romannumber.push(tens[newWord[2]])
  //      romannumber.push(ones[newWord[3]])
  //  }
  //  if (newWord.length===3) {
  //    romannumber.push(hundreds[newWord[0]])
  //    romannumber.push(tens[newWord[1]])
  //    romannumber.push(ones[newWord[2]])
  //  }
  //  if (newWord.length===2) {
  //    romannumber.push(tens[newWord[0]])
  //    romannumber.push(ones[newWord[1]])
  //  }
  //  if (newWord.length===1) {
  //    romannumber.push(ones[newWord[0]])
  //  }
  //   return romannumber;
  var romannumber;
  var reverseWord = newWord.reverse()
  for(var x=0; x < newWord.length; x++) {
    console.log(romannumber[x][reverseWord[x]])
  }
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
