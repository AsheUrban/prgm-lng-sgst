$(document).ready(function() {
  $("form#chooseLang").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("input#age").val());
    const operator = $("input:radio[name=operator]:checked").val()
    const hobby = $("#hobby").val();

    const result1 = "Ruby is the best fit for your active lifestyle!";
    const result2 = "JavaScript will take you to the moon and back!";
    const result3 = "C[#] is the perfect painting partner!";
    const result4 = "Boohoo programming isn't for you!"

    if(age <=20 && operator==="toast" && hobby==="Skiing") {
      $("#output").text(result1);
    } else if (age >=21 && operator === "cereal" && hobby === "Trail Running") {
      $("#output").text(result2);   
    } else if (age === 60 && operator === "toast" && hobby === "Painting") {
      $("#output").text(result3);
    } else {
      $("#output").text(result4);
    }

    function logReset() {
    }
    
  });
});
