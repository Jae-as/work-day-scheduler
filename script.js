var todaysDateElement = document.querySelector("#currentDay")
console.log(todaysDateElement)

// get the time blocks
var timeBlockElements = document.querySelectorAll (".input-area")
console.log(timeBlockElements)

const todaysDate = moment().format('LLLL');
console.log(moment().format('LLLL'));

todaysDateElement.innerHTML = todaysDate;

// get current hour
const militarytime = moment().hour();
console.log(militarytime)

var timeStatus;
// for each time block
for (let index = 0; index < timeBlockElements.length; index++) {
    // can we get the data
    console.log(timeBlockElements[index])
    const timeBlockTime = parseInt(timeBlockElements[index].dataset.universal);
    console.log(militarytime, timeBlockTime)
    console.log(timeBlockTime)
    // compare the time it represents to the current time
    // if the current time is equal to  blocks time
    // -- then background is red
    
    timeStatus = "input-area";
    if (militarytime == timeBlockTime){
        console.log("present")
        timeStatus = "present"
        };
    // if the current is greater 
    // -- then background is gray
    if (militarytime > timeBlockTime) {
        console.log("past")
        timeStatus = "past"
        };
    // if the current is less 
    // -- then background is green
    if (militarytime < timeBlockTime) {
        console.log("future")
        timeStatus = "future"
        };

    timeBlockElements[index].parentElement.classList.add(timeStatus);
}

// save time block comments to local storage
var saveBtn = document.querySelector("#saveBtn");
var savedBlock = localStorage.getItem('savedBlock');

for (let index = 0; index < timeBlockElements.length; index++) {
    var hour = parseInt(timeBlockElements[index].dataset.universal);
    console.log(hour);
    var task = localStorage.getItem(hour + "-block") || ""
    console.log(task);
    timeBlockElements[index].value = task;
}

function saveBlock (e){ 
    console.log(e);
    //get the data attribute from the index line (previous line)
    var hour = e.target.getAttribute("data-universal");
    console.log(hour);
    // get 8 block content
    var timeBlock = document.getElementById(hour + '-block').value;
    localStorage.setItem(hour + '-block', timeBlock);
    console.log(timeBlock);
}

// passing and argument as an event using vanilla JS https://stackoverflow.com/questions/16404327/how-to-pass-event-as-argument-to-an-inline-event-handler-in-javascript
// how to access data attributes from an event object https://stackoverflow.com/questions/37929825/how-to-access-data-attributes-from-event-object 