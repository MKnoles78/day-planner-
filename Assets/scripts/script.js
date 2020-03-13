
var currentDayEl = document.getElementById("currentDay");
var leadEl = document.querySelector(".lead")
var rowEl = document.querySelector(".row");
var presentEl = document.querySelector(".present");
var pastEl = document.querySelector(".past");
var futureEl = document.querySelector("future");
var jumbotronEl = document.querySelector(".jumbotron");
var descriptionEl = document.querySelector(".description");
var timeBlockEl = document.getElementById("time-block");
var hourEl = document.querySelector(".hour");
var savBtnEl = document.querySelector(".saveBtn");
var saveIconEl = document.querySelector(".fa-save");
var outsideColumnEl = document.querySelector(".col-lg-1");
var insideColumnEl = document.querySelector("col-lg-10")

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


// ******************************MIDDLE COLUMN****************************** 

// time previous hours are grey, current hour is red, future hours is green 
// can type in the middle column activities, and should be persistent 
// function that allows you to type into the field text 
// function that changes the row colors after the time has passed, could be if/else 
// if time his equal to current then red 
// if else time is has passed then grey 
// else time is green 


// ********************************SAVE COLUMN******************************* 

// safe lock and blue tabe on the saveBtn feature, slight overlap of columns on inside boders
$(".saveBtn").click(function() {
    alert( "you clicked me" );
  });
// can save information by clicking save button
// should have image from fon awesome 
// on click moment should occur when button is clicked
// if buttong is clicked then information from the text area is saved into local storage and uses JSON and get and set item feature to allow persistence 


