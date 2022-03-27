

const index = [];
for (var i=0; i < 12; i++) {
  index.push(i);
}

$( function() {
  $( "#datepicker" ).datepicker({
    minDate: 0,
     onSelect: function() { 
      var dateObject = $(this).datepicker('getDate'); 
      localStorage.setItem('selectedDay',JSON.stringify(dateObject));
     
     }
  });
});

var selectedDay = localStorage.getItem('selectedDay');

console.log(JSON.parse(selectedDay));





var currentDay = new Date;
var currentDate = currentDay.getFullYear()+"-"+(("0" + (currentDay.getMonth() + 1)).slice(-2))+"-"+("0" + currentDay.getDate()).slice(-2);
console.log(currentDate);
var time = currentDay.getHours();
var minutes = currentDay.getMinutes();
console.log(time);

var timeId = ["07","08","09","10","11","12","13","14","15","16","17","18"];
var timeIdEl = "";

var updateTime = function() {
for (var i=0; i< index.length; i++){
  
    if (time > parseInt(timeId[i])) {
      
      timeIdEl = "#"+i;
      
      $(timeIdEl).addClass("past");
      $(timeIdEl).removeClass("present");

    } else if (time < timeId[i]) {
      timeIdEl = "#"+i;
        $(timeIdEl).addClass("future");
        $(timeIdEl).removeClass("present");
    }
  }
}

var checkTime = function() {
  if (minutes !== 0) {
    updateTime();
  }
}


var eventNew = {};

$("input").on("blur", "textarea", function() {
  

    
    console.log(text);
})



var saveEl = document.querySelector("#save");
var text = [];

var buttonHandler = function(event) {
  console.log("click");
  var targetEl = event.target;
  console.log(targetEl);

  var i=0;
    if (targetEl.matches(".b0")) {

      text = $("input", "#"+i).val();
      console.log(text);
      localStorage.setItem("text", JSON.stringify(text));
    }
  
  checkTime();
}


console.log(saveEl);






  var saveEvent = function() {
    
  }

saveEl.addEventListener("click", buttonHandler);
updateTime();

