var dataElement = document.querySelector("#currentDay");

$(".saveBtn").click(function (event) {
    event.preventDefault();
    var saveData = $(this).siblings(".description").val();
    console.log(saveData);
    var hourID = $(this).parent().attr("id");
    console.log(hourID);
    localStorage.setItem(hourID, saveData);
});

$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12am .description").val(localStorage.getItem("12am"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

function TimeUpdate() {
    dateElement.textcontent = moment().format("MMM DD, YYYY [at] hh:mm:ss A");

}
setInterval(TimeUpdate, 1000);

var currentTime = moment().format("H");
var time9 = 9;
var time10 = 10;
var time11 = 11;
var time12 = 12;
var time1 = 13;
var time2 = 14;
var time3 = 15;
var time4 = 16;
var time5 = 17;

console.log(currentTime);

if (currentTime == time9) {
    $("#9am .description").addClass("present");
} else if (currentTime > time9) {
    $("#9am .description").addClass("past");
} else if (currentTime < time9) {
    $("#9am .description").addClass("future");
}

if (currentTime == time10) {
    $("#10am .description").addClass("present");
} else if (currentTime > time10) {
    $("#10am .description").addClass("past");
} else if (currentTime < time10) {
    $("#10am .description").addClass("future");
}

if (currentTime == time11) {
    $("#11am .description").addClass("present");
} else if (currentTime > time11) {
    $("#11am .description").addClass("past");
} else if (currentTime < time11) {
    $("#11am .description").addClass("future");
}

if (currentTime == time12) {
    $("#12am .description").addClass("present");
} else if (currentTime > time12) {
    $("#12am .description").addClass("past");
} else if (currentTime < time12) {
    $("#12am .description").addClass("future");
}

if (currentTime == time1) {
    $("#1pm .description").addClass("present");
} else if (currentTime > time1) {
    $("#1pm .description").addClass("past");
} else if (currentTime < time1) {
    $("#1pm .description").addClass("future");
}

if (currentTime == time2) {
    $("#2pm .description").addClass("present");
} else if (currentTime > time2) {
    $("#2pm .description").addClass("past");
} else if (currentTime < time2) {
    $("#2pm .description").addClass("future");
}

if (currentTime == time3) {
    $("#3pm .description").addClass("present");
} else if (currentTime > time3) {
    $("#3pm .description").addClass("past");
} else if (currentTime < time3) {
    $("#3pm .description").addClass("future");
}

if (currentTime == time4) {
    $("#4pm .description").addClass("present");
} else if (currentTime > time4) {
    $("#4pm .description").addClass("past");
} else if (currentTime < time4) {
    $("#4pm .description").addClass("future");
}

if (currentTime == time5) {
    $("#5pm .description").addClass("present");
} else if (currentTime > time5) {
    $("#5pm .description").addClass("past");
} else if (currentTime < time5) {
    $("#5pm .description").addClass("future");
}