var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];


// Display Date in header section
var weekDay = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(weekDay);

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
        document.getElementById("rows").appendChild(timeEl);
        timeEl.setAttribute("class", "col-1 hour");
        timeEl.setAttribute("id", "time");
        
        // create time column elements
        var taskEl = document.createElement("div");
        // the text need to be read from local storage (last saved)
        var taskText = document.createTextNode("Hello");
        document.getElementById("rows").appendChild(taskEl);
        taskEl.setAttribute("class", "col-10 future");
        taskEl.appendChild(taskText);

        // create saveBtn column elements
        // var saveEl = document.createElement("div");
        // var saveText = document.createTextNode("save");
        // document.getElementById("rows").appendChild(saveEl);
        // saveEl.setAttribute("class", "col-1 saveBtn");
        // saveEl.appendChild(saveText);
        var saveEl = document.createElement("svg");
        // var saveText = document.createTextNode("save");
        document.getElementById("rows").appendChild(saveEl);
        saveEl.setAttribute("height", "100px");
        saveEl.setAttribute("width", "100px");
        saveEl.setAttribute("class", "col-1 saveBtn");
        // saveEl.appendChild(saveText);
    }
}

init();