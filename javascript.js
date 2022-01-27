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

function timeUpdate() {
    dateElement.textcontent = moment().format("MMM DD, YYYY [at] hh:mm:ss A");

}
setInterval(timeUpdate, 1000);

var presentTime = moment().format("H");
var time9 = 9;
var time10 = 10;
var time11 = 11;
var time12 = 12;
var time1 = 13;
var time2 = 14;
var time3 = 15;
var time4 = 16;
var time5 = 17;

if (currentTime == time9) {
    $("#9am .description").addClass("present");

} else if (currentTime > time9) {
    $("#9am .description").addClass("past");
} else if (currentTime < time9) {
    $("#9am .description").addClass("future");
}