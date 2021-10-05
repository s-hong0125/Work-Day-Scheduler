var currentTime = moment().hour();

$(document).ready(function(){
    var dateInfo = moment().format("dddd Do MMM,YYYY");
    $('#currentDay').text(dateInfo);
    
    $(".saveBtn").on("click", function(){
        var time = $(this).siblings(".hour").text();
        var text = $(this).closest(".time-block").find(".textArea").val();
        
        localStorage.setItem(time,text);
    });

    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));

        if (timeBlock < currentTime) {
            $(this).addClass("past");
        } else if (timeBlock === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
})
