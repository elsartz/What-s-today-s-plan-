

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
      
      // console.log(dateObject);
     }
  });
});

var selectedDay = localStorage.getItem('selectedDay');

console.log(JSON.parse(selectedDay));


// 
$("#sortable").on("textarea", function(){
  var textInput = $(this).val();
  console.log(this);
})
// 


var currentDay = new Date;
var time = currentDay.getHours();
console.log(time);

var timeId = ["07","08","09","10","11","12","13","14","15","16","17","18"];
var timeIdEl = "";
console.log(timeId);
// $("container").on("click", function(){



// time = 11;

for (var i=0; i< index.length; i++){
  // timeId[i] = "#"+i;
  // timeId.push(i);
    // console.log(timeId);

// debugger;
    if (time > parseInt(timeId[i])) {
      // console.log(time);
      // console.log(timeId[i]);
      timeIdEl = "#"+i;
      // console.log(timeIdEl);
      $(timeIdEl).addClass("past");
      $(timeIdEl).removeClass("present");
    } else if (time < timeId[i]) {
      timeIdEl = "#"+i;
        $(timeIdEl).addClass("future");
        $(timeIdEl).removeClass("present");
    }
  }


// });
  // console.log(timeId[3]);





  var saveEvent = function() {
    localStorage.setItem("textEvent", JSON.stringify());
  }