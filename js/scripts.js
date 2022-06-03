//this is ui logic

$(document).ready(function() {
  $("form#chooseLang").submit(function(event) {
    event.preventDefault();

    const name = $("input#name").val();
    const age = $("input#age").val();
    const operator = $("input:radio[name=operator]:checked").val();
    const hobby = $("input:select[name=option]:selected").val();

    $("name").text(name);
    $("age").text(age);
    $("operator").text(operator);
    $("hobby").text(hobby);

    let result;
    if ()
    
    $("#output").text(result);

    });
});