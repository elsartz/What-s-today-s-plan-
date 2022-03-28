
// Array for count purpose
const index = [];
for (var i=0; i < 12; i++) {
  index.push(i);
}


var currentDay = new Date;
// without moments could be like :
//currentDay.getFullYear()+"-"+(("0" + (currentDay.getMonth() + 1)).slice(-2))+"-"+("0" + currentDay.getDate()).slice(-2);

var currentDate = moment().format('dddd, MMM Do YYYY');       
$("#currentDay").html(currentDate);

console.log(currentDate);
var time = currentDay.getHours();
var minutes = currentDay.getMinutes();
console.log(time);
// Time table
var timeId = ["07","08","09","10","11","12","13","14","15","16","17","18"];
var timeIdEl = "";

// Algorithm to change the color of the time table
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
// Time checking
var checkTime = function() {
  if (minutes !== 0) {
    updateTime();
  }
}



var value = {};
var currentText = [];
var setLocal = function() {
    // the last defined text stored to local storage
    $("textarea").on("blur", function() {
      value = $( this ).val();
    console.log(value);
    localStorage.setItem("textArea", JSON.stringify(value));
    currentText.push(localStorage.getItem("textArea"));
    console.log(currentText[0]);
  })
      
}
// select which click area counts
var saveEl = document.querySelector(".container");

// click analyzer function
var buttonHandler = function(event) {
  
  console.log("click");
  var targetEl = event.target;
  console.log(targetEl);
  
  // unfinish thinking
  // var text = $(this).siblings(".description").val();
  // console.log(text);
  // var i=0;
 
  // Automatic with any click color change and of course if minutes not zero
  checkTime();
}



// Start listening
saveEl.addEventListener("click", buttonHandler);
// Update time table
updateTime();

