$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjective1Input = $("input#adjective1").val();
    var person1Input = $("input#person1").val();
    var creature1Input = $("input#creature1").val();
    var sound1Input = $("input#sound1").val();
    var exclamation1Input = $("input#exclamation1").val();
    var emotion1Input = $("input#emotion1").val();
    var verb2Input = $("input#verb2").val();
    var person2Input = $("input#person2").val();
    var verb3Input = $("input#verb3").val();
    var place1Input = $("input#place1").val();
    var food1Input = $("input#food1").val();
    var verbPTInput = $("input#verbPT").val();


    $(".adjective1").text(adjective1Input);
    $(".person1").text(person1Input);
    $(".creature1").text(creature1Input);
    $(".sound1").text(sound1Input);
    $(".exclamation1").text(exclamation1Input);
    $(".emotion1").text(emotion1Input);
    $(".verb2").text(verb2Input);
    $(".person2").text(person2Input);
    $(".verb3").text(verb3Input);
    $(".place1").text(place1Input);
    $(".food1").text(food1Input);
    $(".verbPT").text(verbPTInput);


    $("#story").show();

    event.preventDefault();
  });
});
