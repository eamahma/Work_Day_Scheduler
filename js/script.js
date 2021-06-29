// using moment to update date on header
var weekDay = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(weekDay);

// When document loaded ...
$(document).ready(function(){
    // when saveBtn pressed
    $(".saveBtn").on("click",function(){
        // get sibling to saveBtn -> .description (textbox) value
        var textValue = $(this).siblings(".description").val();
        // get parent attribute id (hour)
        var time = $(this).parent().attr("id");

        // store time and value into local storage
        localStorage.setItem(time, textValue);
    })
    
    // call function to update time blocks color
    function timeBlockUpdate() {
        // get the current hour
        var currentHour = moment().hours();
        // for each timeblock ...
        $(".time-block").each(function(){
            // get row element id and convert to int
            var blockHour = parseInt($(this).attr("id"));

            // if time block hour is in past
            if (blockHour < currentHour) {
                $(this).addClass("past");
            // if time block is present
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            // otherwise, is in future
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");                 
            }
        })
    }

    // call function to update time blocks color
    timeBlockUpdate();

    // get local storage value for each time block
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
