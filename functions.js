
function formatDate(date) {
    var dayNames = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];
    
  var dayIndex = date.getDay();
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return dayNames[dayIndex] + ' ' + day + 'th' + ' ' + monthNames[monthIndex] + ' ' + year;
}

function formatTime(date){
    
    var hour = date.getHours();
    var ampm = '';
    if(hour>=12){
       ampm = 'PM';
        if(hour>12){
            hour = hour - 12;
        }
    }
    else{
        ampm = 'AM';
    }
    
    var minutes = date.getMinutes();
    if(minutes<10){
       minutes = '0' + minutes;
    }
    
    return hour + ':' + minutes + ' ' + ampm;
}
    
function changeTitle(){
    
    var newtitle = document.getElementById("inputTitle").value;
    
    if(newtitle!=''){
       document.title = newtitle;
    }
}