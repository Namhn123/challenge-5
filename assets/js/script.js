$(function () {
  $('#currentDay').text(dayjs().format("dddd, MMMM D")); //displays the current day of the week, the month and the numbered day

  var currentHour = Number(dayjs().format("H")); //gets the current hour and turns it into a number
  var hours = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-13", "hour-14", "hour-15", "hour-16", "hour-17"];//string for time block id's

  var tasks = JSON.parse(localStorage.getItem("tasks")); //pulls tasks from local storage
  if (tasks == null) { //if there is no tasks in local storage, set each entry as empty string
    tasks = ["","","","","","","","",""];
  }

  for(var i=0; i<9; i++) {
    var hour = Number(hours[i].substring(5,hours[i].length))//removes "hour-" from the hours array and turns into number
    
    //compares the current hour with the hour of time block and sets class based on if it's less than, greater than, or equal to
    if (currentHour === hour) {
      $('#' + hours[i]).addClass("present");
    } else if (currentHour > hour) {
      $('#' + hours[i]).addClass("past");
    } else {
      $('#' + hours[i]).addClass("future");
    }
    $("#" + hours[i]).children("textarea").val(tasks[i]); //sets area with the entries from local storage
  }

  function handleSave(event) {
    event.preventDefault();
    var currentId = $(this).parent().attr("id");//gets id of parent
    tasks[hours.indexOf(currentId)] = $("#" + currentId).children("textarea").val();//gets value of the text area associated with parent and updates the array
    localStorage.setItem("tasks", JSON.stringify(tasks));//sets the local storage with the updated array
  }

  $('#schedule').on('click', '.saveBtn', handleSave); //when save button is clicked, calls handleSave
});
