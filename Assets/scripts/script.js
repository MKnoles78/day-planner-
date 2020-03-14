
var currentDayEl = document.getElementById("currentDay");
var leadEl = document.querySelectorAll(".lead")
var rowEl = document.querySelectorAll(".row");
var presentEl = document.querySelectorAll(".present");
var pastEl = document.querySelectorAll(".past");
var futureEl = document.querySelectorAll("future");
var jumbotronEl = document.querySelector(".jumbotron");
var timeBlockEl = document.getElementById("time-block");
var hourEl = document.querySelectorAll(".hour");
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

$(".saveBtn").click(function(event) {
    event.preventDefault();
    setTasks ()
    

  });
  

    


//  var storedTasks = JSON.parse(localStorage.getItem("description"));




// can save information by clicking save button




// should have image from fon awesome 
// on click moment should occur when button is clicked
// if buttong is clicked then information from the text area is saved into local storage and uses JSON and get and set item feature to allow persistence 


