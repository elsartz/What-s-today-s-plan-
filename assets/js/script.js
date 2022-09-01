
// Array for count purpose
var index = [];
for (var i=0; i < 12; i++) {
  index.push(i);
}


var currentDay = new Date;
// without moments could be like :
//currentDay.getFullYear()+"-"+(("0" + (currentDay.getMonth() + 1)).slice(-2))+"-"+("0" + currentDay.getDate()).slice(-2);

var currentDate = moment().format('dddd, MMM Do YYYY');       
$("#currentDay").html(currentDate);

var time = currentDay.getHours();
var minutes = currentDay.getMinutes();

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



var value = [];

var permanentText = [];
var currentText = [];
for (var i=0; i<12; i++) {currentText[i]="";}


var setLocal = function() {
// the last defined text 
     $("textarea").on("blur", function() {
       value = $( this ).val();
  })
      
}
// select which click area counts
var saveEl = document.querySelector(".container");

// click analyzer function
var buttonHandler = function(event) {
  
  var targetEl = event.target;

  // console.log(event.target);

 switch(parseInt(targetEl.id)) {
   case 0:
      localStorage.setItem("text0", JSON.stringify(value));
      currentText[0] = JSON.parse(localStorage.getItem("text0"));   
    break;
   
    case 1:     
      localStorage.setItem("text1", JSON.stringify(value));
      currentText[1] = JSON.parse(localStorage.getItem("text1"));     
    break;

    case 2:     
      localStorage.setItem("text2", JSON.stringify(value));
      currentText[2] = JSON.parse(localStorage.getItem("text2"));       
    break;
    
    case 3:  
      localStorage.setItem("text3", JSON.stringify(value));
      currentText[3] = JSON.parse(localStorage.getItem("text3"));      
    break;

    case 4:     
      localStorage.setItem("text4", JSON.stringify(value));
      currentText[4] = JSON.parse(localStorage.getItem("text4"));   
    break;

    case 5:     
      localStorage.setItem("text5", JSON.stringify(value));
      currentText[5] = JSON.parse(localStorage.getItem("text5"));   
    break;

    case 6:     
      localStorage.setItem("text6", JSON.stringify(value));
      currentText[6] = JSON.parse(localStorage.getItem("text6"));   
    break;

    case 7:     
      localStorage.setItem("text7", JSON.stringify(value));
      currentText[7] = JSON.parse(localStorage.getItem("text7"));   
    break;

    case 8:     
      localStorage.setItem("text8", JSON.stringify(value));
      currentText[8] = JSON.parse(localStorage.getItem("text8"));   
    break;

    case 9:     
      localStorage.setItem("text9", JSON.stringify(value));
      currentText[9] = JSON.parse(localStorage.getItem("text9"));   
    break;

    case 10:     
      localStorage.setItem("text10", JSON.stringify(value));
      currentText[10] = JSON.parse(localStorage.getItem("text10"));   
    break;

    case 11:     
      localStorage.setItem("text11", JSON.stringify(value));
      currentText[11] = JSON.parse(localStorage.getItem("text11"));   
    break;
 }

  // Automatic with any click color change and of course if minutes not zero
  checkTime();
  planning();
}

var planning = function() {

var textEl = document.querySelectorAll("textarea");
// console.log(textEl[0].textContent)

  for (var i=0; i < 12; i++) {

    currentText[i] = JSON.parse(localStorage.getItem("text"+i)); 

    textEl[i].textContent = currentText[i];
    // console.log(currentText[i]);
    // console.log(textEl[i]);

  }
}

// Update time table
updateTime();
// Today's plan
planning();

// Start listening
saveEl.addEventListener("click", buttonHandler);
