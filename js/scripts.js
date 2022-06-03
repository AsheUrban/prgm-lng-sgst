//this is ui logic

$(document).ready(function() {
  $("form#chooseLang").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = $("input#age").val();
    const operator = $("input:radio[name=operator]:checked").val();
    console.log(name); // for debugging
    console.log(age); // for debugging

    $("name").text(name);
    $("age").text(age);

    $("#output").text(name);
    $("#output").text(age);
  });
});