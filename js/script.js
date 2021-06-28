var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// Display Date in header section
var weekDay = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(weekDay);

// get current time
var currentTime = moment().hour();

// function to identify which save button clicked
function replyClick(clicked_id) {
    console.log(clicked_id);
}

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
        var taskEl = document.createElement("textarea");
        // the text need to be read from local storage (last saved)
        var taskText = document.createTextNode("");
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
        var saveEl = document.createElement("button");
        rowEl.appendChild(saveEl);
        saveEl.setAttribute("class", "col-1 saveBtn");
        saveEl.setAttribute("id", "button"); 
        saveEl.setAttribute("style", "text-align: center;"); 
        //adding font awsome icon for save button
        var iconEl = document.createElement("i")
        saveEl.appendChild(iconEl);
        iconEl.setAttribute("class", "fas fa-save fa-2x"); 
        // set button id and function to save current task
        switch(i) {
            case 0:
                taskEl.setAttribute("id", "task0");
                iconEl.setAttribute("id", "button0");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 1:
                taskEl.setAttribute("id", "task1");
                iconEl.setAttribute("id", "button1");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 2:
                taskEl.setAttribute("id", "task2");
                iconEl.setAttribute("id", "button2");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 3:
                taskEl.setAttribute("id", "task3");
                iconEl.setAttribute("id", "button3");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 4:
                taskEl.setAttribute("id", "task4");
                iconEl.setAttribute("id", "button4");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 5:
                taskEl.setAttribute("id", "task5");
                iconEl.setAttribute("id", "button5");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 6:
                taskEl.setAttribute("id", "task6");
                iconEl.setAttribute("id", "button6");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 7:
                taskEl.setAttribute("id", "task7");
                iconEl.setAttribute("id", "button7");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;
            case 8:
                taskEl.setAttribute("id", "task0");
                iconEl.setAttribute("id", "button8");
                iconEl.setAttribute("onclick", "replyClick(this.id)");
                break;                        
        }
    }
}



init();