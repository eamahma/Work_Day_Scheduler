var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// Display Date in header section
var weekDay = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(weekDay);

// get current time
var currentTime = moment().hour();
console.log(currentTime);


// Initialize screen
function init() {
    for (var i = 0; i < workHours.length; i++) {
        // create row element
        var rowEl = document.createElement("div");
        document.getElementById("cont").appendChild(rowEl);
        rowEl.setAttribute("class", "row");
        rowEl.setAttribute("id", "rows");
       
        // create time column elements
        var timeEl = document.createElement("div");
        var timeText = document.createTextNode(workHours[i]);
        timeEl.appendChild(timeText);
        rowEl.appendChild(timeEl);
        timeEl.setAttribute("class", "col-1 hour");
        timeEl.setAttribute("id", "time");
        
        // create time column elements
        var taskEl = document.createElement("div");
        // the text need to be read from local storage (last saved)
        var taskText = document.createTextNode("Hello");
        rowEl.appendChild(taskEl);

        // check time if is past, present, or future to set background
        if (currentTime > i + 8) {
            taskEl.setAttribute("class", "col-10 past");
        } else if (currentTime === i + 8) {
            taskEl.setAttribute("class", "col-10 present");
        } else {
            taskEl.setAttribute("class", "col-10 future");
        }
        taskEl.appendChild(taskText);

        // create saveBtn column elements
        var saveEl = document.createElement("div");
        rowEl.appendChild(saveEl);
        saveEl.setAttribute("class", "col-1 saveBtn");
        saveEl.setAttribute("id", "button"); 
        saveEl.setAttribute("style", "text-align: center;"); 
        //adding font awsome icon for save button
        var iconEl = document.createElement("i")
        saveEl.appendChild(iconEl);
        iconEl.setAttribute("class", "fas fa-save fa-2x"); 
    }
}

init();