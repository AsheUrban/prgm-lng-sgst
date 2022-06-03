

//this is ui logic

$(document).ready(function() {
  $("form#chooseLang").submit(function(event) {
    event.preventDefault();
    const age = $("input#age").val();
    const operator = $("input:radio[name=operator]:checked").val()
    const hobby = $("#hobby").val();

    const result1 = "Ruby";
    const result2 = "JavaScript";
    const result3 = "C";

    if(age <=20 && operator==="toast" && hobby==="Skiing") {
      $("#output").text(result1);
    } else if (age<=40 && operator==="cereal" && hobby==="Trail Running") {
      $("#output").text(result2);   
    } else if (age<=60 && operator==="toast" && hobby==="Painting") {
      $("#output").text(result3);
    }

    function logReset(event) {
      log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
    }
    
    const form = document.getElementById('form');
    const log = document.getElementById('log');
    form.addEventListener('reset', logReset);

 
  });
});
