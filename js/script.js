// using moment to update date on header
var weekDay = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(weekDay);

$(document).ready(function() {
    // work hours
    const timeBlocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];  
    

    // creating time blocks with unique ID
    $.each(timeBlocks, function (i) {
        $(".container").append("<div class='row time-block' id='"+timeBlocks[i]+"'></div>");
        return;
    });

    // add time div, text area, and save button elements to row element
    function addTimeBlocks(index){
        $(".row").append("<div class='hour col-1'></div>");
        $(".row").append("<textarea class='description col-10'></textarea>");
        $(".row").append("<button class='saveBtn col-1'><i class='fas fa-save'></button>");
        return;
    }

    addTimeBlocks();

    // Set time lables to each time block
    $("#9").children("div").text("9AM");
    $("#10").children("div").text("10AM");
    $("#11").children("div").text("11AM");
    $("#12").children("div").text("12PM");
    $("#13").children("div").text("1PM");
    $("#14").children("div").text("2PM");
    $("#15").children("div").text("3PM");
    $("#16").children("div").text("4PM");
    $("#17").children("div").text("5PM");

    // read current time
    var currentTime = moment().hour();

    // set the time blocks color based on current time
    $.each(timeBlocks, function (i) {
        if (currentTime > timeBlocks [i]) {
            $("#"+ timeBlocks[i]).children("textarea").addClass("past");    
        } else if (currentTime === timeBlocks[i]) {
            $("#"+ timeBlocks[i]).children("textarea").addClass("present");    
        } else {
            $("#"+ timeBlocks[i]).children("textarea").addClass("future");         
        }
        $("#"+ timeBlocks[i]).children("textarea").val(localStorage.getItem(timeBlocks[i]));
    //    return;
    });

    $(".saveBtn").on("click",function(){
        // get sibling to saveBtn -> .description (textbox) value
        var textValue = $(this).siblings(".description").val();
        // get parent attribute id (hour)
        var time = $(this).parent().attr("id");
        // store time and value into local storage
        localStorage.setItem(time, textValue);
    })
})
