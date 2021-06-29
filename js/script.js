$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var textValue = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, textValue);
    })
    
    function timeBlockUpdate() {
        var currentHour = moment().hours();
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id"));

            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");  
            } else {
                $(this).removeClass("past");
                $(this).removeClass("ppresent");
                $(this).addClass("future");                 
            }
        })
    }

    timeBlockUpdate();

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
})




// var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

// // Display Date in header section
// var weekDay = moment().format("ddd MMM Do, YYYY");
// $('#currentDay').text(weekDay);

// // get current time
// var currentTime = moment().hour();

// function storeTask(index, content) {
//     var taskText = content.trim();
//     if (taskText !== "") {
//         var tasks = [];
//         tasks = JSON.parse(localStorage.getItem("index")) || [];
//         var currentTask = {
//             key: index,
//             value: taskText
//         }
//         tasks.push(currentTask);
//         localStorage.setItem("index", JSON.stringify(tasks));
//     }
//     console.log(currentTask);
// }

// // function to identify which save button clicked
// function replyClick(clicked_id) {
//     // console.log(clicked_id);
//     var taskText = "";
//     switch(clicked_id) {
//         case 'button0':
//             taskText = document.getElementById("task0").value;
//             taskText.value = localStorage.getItem("0");
//             storeTask(0, taskText);
//             break;
//         case 'button1':
//             taskText = document.getElementById("task1").value;
//             storeTask(1, taskText);
//             break;    
//         case 'button2':
//             taskText = document.getElementById("task2").value;
//             storeTask(2, taskText);
//             break;
//         case 'button3':
//             taskText = document.getElementById("task3").value;
//             storeTask(3, taskText);
//             break;
//         case 'button4':
//             taskText = document.getElementById("task4").value;
//             storeTask(4, taskText);
//             break;    
//         case 'button5':
//             taskText = document.getElementById("task5").value;
//             storeTask(5, taskText);
//             break;
//         case 'button6':
//             taskText = document.getElementById("task6").value;
//             storeTask(6, taskText);
//             break;    
//         case 'button7':
//             taskText = document.getElementById("task7").value;
//             storeTask(7, taskText);
//             break;            
//         case 'button8':
//             taskText = document.getElementById("task8").value;
//             storeTask(8, taskText);
//             break;
//     }
// }

// function displayTasks() {
//     var tasks = [];
//     tasks = JSON.parse(localStorage.getItem("index")) || [];
//     for (var i = 0; i < tasks.length; i++) {
//         var task = tasks[i].value;
//         var index = tasks[i].key;
// //         console.log(index, task);

//         if (tasks[i].key === 0) {
//             document.getElementById("task0").textContent = tasks[i].value;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 1) {
// //            document.getElementById("task1").textContent = tasks[i].value;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 2) {
// //            document.getElementById("task2").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 3) {
// //            document.getElementById("task3").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 4) {
// //            document.getElementById("task4").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 5) {
// //            document.getElementById("task5").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 6) {
// //            document.getElementById("task6").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (intasks[i].key === 7) {
// //            document.getElementById("task7").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
//         } else if (tasks[i].key === 8) {      
// //            document.getElementById("task8").textContent = task;
//             console.log(tasks[i].key, tasks[i].value);
// }
//     }

//         //        document.getElementById("task0").textContent = task;
//         // switch(i) {
//         //     case 0:
//         //         if (task) {
//         //             document.getElementById("task0").textContent = task;
//         //         }
//         //         continue;
//         //     case 1:
//         //         if (task) {
//         //             document.getElementById("task1").textContent = task;
//         //         }
//         //         continue;
//         //     case 2:
//         //         if (task) {
//         //             document.getElementById("task2").textContent = task;
//         //         }
//         //         continue;
//         //     case 3:
//         //         if (task) {
//         //             document.getElementById("task3").textContent = task;
//         //         }
//         //         continue;
//         //     case 4:
//         //         if (task) {
//         //             document.getElementById("task4").textContent = task;
//         //         }
//         //         continue;
//         //     case 5:
//         //         if (task) {
//         //             document.getElementById("task5").textContent = task;
//         //         }
//         //         continue;
//         //     case 6:
//         //         if (task) {
//         //             document.getElementById("task6").textContent = task;
//         //         }
//         //         continue;
//         //     case 7:
//         //         if (task) {
//         //             document.getElementById("task7").textContent = task;
//         //         }
//         //         continue;
//         //     case 8:
//         //         if (task) {
//         //             document.getElementById("task8").textContent = task;
//         //         }
//         //         continue;
//         // } 
// }

// // Initialize screen
// function init() {
//     for (var i = 0; i < workHours.length; i++) {
//         // create row element
//         var rowEl = document.createElement("div");
//         document.getElementById("cont").appendChild(rowEl);
//         rowEl.setAttribute("class", "row");
//         rowEl.setAttribute("id", "rows");
       
//         // create time column elements
//         var timeEl = document.createElement("div");
//         var timeText = document.createTextNode(workHours[i]);
//         timeEl.appendChild(timeText);
//         rowEl.appendChild(timeEl);
//         timeEl.setAttribute("class", "col-1 hour");
//         timeEl.setAttribute("id", "time");
        
//         // create time column elements
//         var taskEl = document.createElement("textarea");
//         // the text need to be read from local storage (last saved)
//         var taskText = document.createTextNode("");
//         rowEl.appendChild(taskEl);

//         // check time if is past, present, or future to set background
//         if (currentTime > i + 9) {
//             taskEl.setAttribute("class", "col-10 past");
//         } else if (currentTime === i + 9) {
//             taskEl.setAttribute("class", "col-10 present");
//         } else {
//             taskEl.setAttribute("class", "col-10 future");
//         }
//         taskEl.appendChild(taskText);

//         // create saveBtn column elements
//         var saveEl = document.createElement("button");
//         rowEl.appendChild(saveEl);
//         saveEl.setAttribute("class", "col-1 saveBtn");
//         saveEl.setAttribute("id", "button"); 
//         saveEl.setAttribute("style", "text-align: center;"); 
//         //adding font awsome icon for save button
//         var iconEl = document.createElement("i")
//         saveEl.appendChild(iconEl);
//         iconEl.setAttribute("class", "fas fa-save fa-2x"); 
//         // set button id and function to save current task
//         switch(i) {
//             case 0:
//                 taskEl.setAttribute("id", "task0");
//                 iconEl.setAttribute("id", "button0");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 1:
//                 taskEl.setAttribute("id", "task1");
//                 iconEl.setAttribute("id", "button1");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 2:
//                 taskEl.setAttribute("id", "task2");
//                 iconEl.setAttribute("id", "button2");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 3:
//                 taskEl.setAttribute("id", "task3");
//                 iconEl.setAttribute("id", "button3");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 4:
//                 taskEl.setAttribute("id", "task4");
//                 iconEl.setAttribute("id", "button4");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 5:
//                 taskEl.setAttribute("id", "task5");
//                 iconEl.setAttribute("id", "button5");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 6:
//                 taskEl.setAttribute("id", "task6");
//                 iconEl.setAttribute("id", "button6");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 7:
//                 taskEl.setAttribute("id", "task7");
//                 iconEl.setAttribute("id", "button7");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;
//             case 8:
//                 taskEl.setAttribute("id", "task8");
//                 iconEl.setAttribute("id", "button8");
//                 iconEl.setAttribute("onclick", "replyClick(this.id)");
//                 break;                        
//         }
//         displayTasks();
//     }
// }



// init();