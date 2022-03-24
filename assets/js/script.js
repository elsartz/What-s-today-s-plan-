
$( function() {
  $("#sortable").sortable();
});


$( function() {
  $( "#datepicker" ).datepicker();
});

// $('#sortable').draggable();

var tasks = {};

 $("#create-task").on("click", function(taskTime,taskText) {
  //  debugger;
   var taskLi = $("<li>").addClass("list");

   var taskTime = $("<span>").addClass("badge badge-primary badge-pill").text("timeEvent");

   var taskText = $("li").addClass("").text("taskEvent");

  // var taskSave = $("<button").addClass("saveBtn").text("saveBtn");


   $("ul").append(taskLi);
 });


 $(".list-group").on("click", "li", function() { // console.log("<p> was clicked");
  var text = $(this).text();
  console.log(text);
  
  var textInput = $("<textarea>")
  .addClass("form-control")
  .val(text);

  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});




