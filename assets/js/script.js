$(function () {
  $('#currentDay').text(dayjs().format("dddd, MMMM D"));

  var currentHour = Number(dayjs().format("H"));
  var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];
  
  var tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks == null) {
    tasks = ["","","","","","","","",""];
  }

  for(var i=0; i<9; i++) {
    var hour = Number(hours[i].substring(5,hours[i].length))
    if (currentHour === hour) {
      $('#' + hours[i]).addClass("present");
    } else if (currentHour > hour) {
      $('#' + hours[i]).addClass("past");
    } else {
      $('#' + hours[i]).addClass("future");
    }
    $("#" + hours[i]).children("textarea").val(tasks[i]);
  }

  function handleSave(event) {
    event.preventDefault();
    var currentId = $(this).parent().attr("id");
    var task = $("#" + currentId).children("textarea").val();
    tasks[hours.indexOf(currentId)] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  $('#schedule').on('click', '.saveBtn', handleSave);
});
