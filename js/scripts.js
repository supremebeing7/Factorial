var factorial = function(number) {
  if (number === 0) {
    return 1;
  } else if (number >= 1 && number % 1 === 0) {
    return number * factorial(number -1);
  }  
    else {
  return false;
  };
};


$(document).ready(function() {
  $('form#factorials').submit(function(event) {
    var numbers = ($('input#numbers').val());
    var result = factorial(numbers);

    $('#result').show();
    $('.results').text(result);
    this.reset();
    event.preventDefault();
  });
});





// $(document).ready(function() {
//   $("").submit(function(event) {
//     var phrase = $('input#phrase').val();

//     var newPhrase = titleCase(phrase);

//     $(".finalResult").text(newPhrase);
//     $("#finalResult").show();
//     this.reset();
//     event.preventDefault();
//   });
// });
