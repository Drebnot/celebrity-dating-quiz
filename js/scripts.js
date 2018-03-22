$(document).ready(function(){
  $("form#CelebMatcher").submit(function(event){
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === 'male' && age < 30) {
      match = "Emma Watson";
    } else{
      match = "Justin Beiber";
    }

    $("#celeb").text(match);
    $("#match").show();
    event.preventDefault();
  });
});
