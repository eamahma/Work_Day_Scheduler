// using moment to update date on header
var weekDay = moment().format("ddd MMM Do, YYYY");
$('#currentDay').text(weekDay);

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
