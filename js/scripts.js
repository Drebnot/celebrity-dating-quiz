$(document).ready(function(){
  $("form#CelebMatcher").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === 'male' && age < 30) {
      match = "Emma Watson";
    } else if (gender === 'female' && age < 30){
      match = "Justin Beiber";
    } else if (gender === 'male' && age >= 30){
      match = "Bette Midler";
    } else {
      match = "Brad Pitt";
    }

    $("#celeb").text(match);
    $("#match").show();
    event.preventDefault();
  });
});
