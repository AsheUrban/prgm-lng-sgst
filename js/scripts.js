

//this is ui logic

$(document).ready(function() {
  $("form#chooseLang").submit(function(event) {
    event.preventDefault();
    const age = $("input#age").val();
    const operator = $("input:radio[name=operator]:checked").val()
    const hobby = $("#hobby").val();
    console.log("hobby");
    const result1 = "Ruby";
    const result2 = "JavaScript";
    const result3 = "C";

    if(age <=20) {
      if (operator === "toast");
      if (hobby === "Skiing") 
        $("#output").text(result1);
      
    } else if (age<=40) {
      if (operator === "cereal");
        if (hobby === "Trail Running");
          $("#output").text(result2);   
     
    } else if (age<=60) {
     if (operator === "toast");
        if (hobby === "painting");
          $("#output").text(result3);
    }
  });
});
