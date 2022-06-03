

//this is ui logic

$(document).ready(function() {
  $("form#chooseLang").submit(function(event) {
    event.preventDefault();
    const age = $("input#age").val();
    const result1 = $("Ruby").val();
    const result2 = $("JavaScript").val();
    const result3 = $("C#").val();
    if(age <=20) {
      $("#output").text(result1);  
    } else if (age<=40) {
      $("#output").text(result2);
    } else {
      $("#output").text(result3);
    }
    });
});


// $(document).ready(function() {
//   $("form#chooseLang").submit(function(event) {
//     event.preventDefault();

//     const name = $("input#name").val();
//     const age = $("input#age").val();
//     const operator = $("input:radio[name=operator]:checked").val();
//     const hobby = $("input:select[name=option]:selected").val();

//     $("name").text(name);
//     $("age").text(age);
//     $("operator").text(operator);
//     $("hobby").text(hobby);

//     let result1;
//     if (age <= "20") {
//       result1=

      
//     }
    
//     $("#output").text(result1);

//     // let result2;
//     // if ()

//     // $("#output").text(result2);

//     // let result3;


//     });
// });