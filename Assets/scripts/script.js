
var currentDayEl = document.getElementById("currentDay");
var currentTimeEl = document.getElementById("currentTime")
var rowEl = document.querySelectorAll(".row");
var presentEl = document.querySelectorAll(".present");
var pastEl = document.querySelectorAll(".past");
var futureEl = document.querySelectorAll("future");
var jumbotronEl = document.querySelector(".jumbotron");
var timeBlockEl = document.getElementById("time-block");
var savBtnEl = document.querySelectorAll(".saveBtn");
var saveIconEl = document.querySelectorAll(".fa-save");


// *******************************COMPONENTS******************************* 

// ********************************JUMBOTRON******************************* 

// jumbotron displays current date format (day, month, date)
// displays day of the week 
// moment().format('dddd');
// displays mon, xx, xxxx 
// moment().format('ll');

currentDayEl.innerHTML = moment().format('dddd, MMM Do');


// *******************************TIME COLUMN******************************* 

//time on the right column from 9-5
// shouild be able to just pend time to the rows 
var hourNineEl = document.querySelector(".hour-1");
var hourTenEl = document.querySelector(".hour-2");
var hourElevenEl = document.querySelector(".hour-3");
var hourTwelveEl = document.querySelector(".hour-4");
var hourOneEl = document.querySelector(".hour-5");
var hourTwoEl = document.querySelector(".hour-6");
var hourThreeEl = document.querySelector(".hour-7");
var hourFourEl = document.querySelector(".hour-8");
var hourFiveEl = document.querySelector(".hour-9");




// function myFunction() {
//     var d = new Hour();
//     d.setHours(9, 00, 00);
//     hourNineEl.innerHTML = d;
//   }
//   myFunction ()

//   if the current hour equals the same then red 
//   if the current hour is greater than grey 
//   if the current hour is less than the time then green

// ******************************MIDDLE COLUMN****************************** 

// time previous hours are grey, current hour is red, future hours is green 
// need to create intervals to clear 
// var currentTime = moment().format('LTS');


// function timer(){ 
//    if (new Date() < currentTime) {
//     $("textarea").addClass("past");}
//    };
//  timer ()

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  currentTimeEl.innerHTML = t;
};

var hourNineEl = "09:00";
var hourTenEl = "10:00";
var hourElevenEl = "11:00";
var hourTwelveEl = "12:00";
var hourOneEl = "13:00";
var hourTwoEl = "14:00";
var hourThreeEl = "15:00";
var hourFourEl = "16:00";
var hourFiveEl = "17:00"

if (currentTimeEl > hourNineEl) {
    past ()
  } else if (currentTimeEl === hourNineEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-1").addClass("past");
  };
  function present (){
    $("textarea-1").addClass("present");
  };
  function future (){
    $("textarea-1").addClass("future");
  };  

  if (currentTimeEl > hourTenEl) {
    past ()
  } else if (currentTimeEl === hourTenEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-2").addClass("past");
  };
  function present (){
    $("textarea-2").addClass("present");
  };
  function future (){
    $("textarea-2").addClass("future");
  };  
  if (currentTimeEl > hourElevenEl) {
    past ()
  } else if (currentTimeEl === hourElevenEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-3").addClass("past");
  };
  function present (){
    $("textarea-3").addClass("present");
  };
  function future (){
    $("textarea-3").addClass("future");
  };  
  if (currentTimeEl > hourTwelveEl) {
    past ()
  } else if (currentTimeEl === hourTwelveEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-4").addClass("past");
  };
  function present (){
    $("textarea-4").addClass("present");
  };
  function future (){
    $("textarea-4").addClass("future");
  };  

  if (currentTimeEl > hourOneEl) {
    past ()
  } else if (currentTimeEl === hourOneEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-5").addClass("past");
  };
  function present (){
    $("textarea-5").addClass("present");
  };
  function future (){
    $("textarea-5").addClass("future");
  };  

  if (currentTimeEl > hourTwoEl) {
    past ()
  } else if (currentTimeEl === hourTwoEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-6").addClass("past");
  };
  function present (){
    $("textarea-6").addClass("present");
  };
  function future (){
    $("textarea-6").addClass("future");
  };  

  if (currentTimeEl > hourThreeEl) {
    past ()
  } else if (currentTimeEl === hourThreeEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-7").addClass("past");
  };
  function present (){
    $("textarea-7").addClass("present");
  };
  function future (){
    $("textarea-7").addClass("future");
  };  

  if (currentTimeEl > hourFourEl) {
    past ()
  } else if (currentTimeEl === hourFourEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-8").addClass("past");
  };
  function present (){
    $("textarea-8").addClass("present");
  };
  function future (){
    $("textarea-8").addClass("future");
  };  

  if (currentTimeEl > hourFiveEl) {
    past ()
  } else if (currentTimeEl === hourFiveEl) {
    present ()
  } else {
    future ()
  };

  function past (){
    $("textarea-9").addClass("past");
  };
  function present (){
    $("textarea-9").addClass("present");
  };
  function future (){
    $("textarea-9").addClass("future");
  };  









// setInterval(function(){ 
//     $("textarea").addClass("past"); }, 3000);

// can type in the middle column activities, and should be persistent 
// function that allows you to type into the field text 
// function that changes the row colors after the time has passed, could be if/else 
// if time his equal to current then red 
// if else time is has passed then grey 
// else time is green 


// ********************************SAVE COLUMN******************************* 

// safe lock and blue tabe on the saveBtn feature, slight overlap of columns on inside boders
// can save information by clicking save button
// should have image from fon awesome 
// on click moment should occur when button is clicked
$(".saveBtn").click(function(event) {
    event.preventDefault();
    setTasks () 

  });

// if button is clicked then information from the text area is saved into local storage and uses JSON and get and set item feature to allow persistence

 function setTasks () {
    var descriptionOneEl = document.querySelector(".description-1").value;
    localStorage.setItem("description-1", JSON.stringify(descriptionOneEl));
    
    var descriptionTwoEl = document.querySelector(".description-2").value;
    localStorage.setItem("description-2", JSON.stringify(descriptionTwoEl));
    
    var descriptionThreeEl = document.querySelector(".description-3").value;
    localStorage.setItem("description-3", JSON.stringify(descriptionThreeEl));
    
    var descriptionFourEl = document.querySelector(".description-4").value;
    localStorage.setItem("description-4", JSON.stringify(descriptionFourEl));
    
    var descriptionFiveEl = document.querySelector(".description-5").value;
    localStorage.setItem("description-5", JSON.stringify(descriptionFiveEl));
    
    var descriptionSixEl = document.querySelector(".description-6").value;
    localStorage.setItem("description-6", JSON.stringify(descriptionSixEl));
    
    var descriptionSevenEl = document.querySelector(".description-7").value;
    localStorage.setItem("description-7", JSON.stringify(descriptionSevenEl));
    
    var descriptionEightEl = document.querySelector(".description-8").value;
    localStorage.setItem("description-8", JSON.stringify(descriptionEightEl));

    var descriptionNineEl = document.querySelector(".description-9").value;
    localStorage.setItem("description-9", JSON.stringify(descriptionNineEl));


 };

    var retrieveTasksOne = JSON.parse(localStorage.getItem("description-1"))
    var retrieveTasksTwo = JSON.parse(localStorage.getItem("description-2"))
    var retrieveTasksThree = JSON.parse(localStorage.getItem("description-3"))
    var retrieveTasksFour = JSON.parse(localStorage.getItem("description-4"))
    var retrieveTasksFive = JSON.parse(localStorage.getItem("description-5"))
    var retrieveTasksSix = JSON.parse(localStorage.getItem("description-6"))
    var retrieveTasksSeven = JSON.parse(localStorage.getItem("description-6"))
    var retrieveTasksEight = JSON.parse(localStorage.getItem("description-8"))
    var retrieveTasksNine = JSON.parse(localStorage.getItem("description-9"))

    function displayTasks (){
        $("textarea.description-1").html(retrieveTasksOne);
        $("textarea.description-2").html(retrieveTasksTwo);
        $("textarea.description-3").html(retrieveTasksThree);
        $("textarea.description-4").html(retrieveTasksFour);
        $("textarea.description-5").html(retrieveTasksFive);
        $("textarea.description-6").html(retrieveTasksSix);
        $("textarea.description-7").html(retrieveTasksSeven);
        $("textarea.description-8").html(retrieveTasksEight);
        $("textarea.description-9").html(retrieveTasksNine);

    };

    displayTasks();

  












 


