//Date and Watch
(function(){
    
    var refreshHour = function(){
        var date = new Date(),
            hour = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            day = date.getDay(),
            numberDay = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();
        
        
    var pHours = document.getElementById('hour'),
        pAMPM = document.getElementById('ampm'),
        pMinutes = document.getElementById('minutes'),
        pDay = document.getElementById('day'),
        pNumberDay = document.getElementById('numberDay'),
        pMonth = document.getElementById('month'),
        pYear = document.getElementById('year');
    
        
    var days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
      ];
        
        pDay.textContent = days[day];
        pNumberDay.textContent = numberDay + "th";
        
    var months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
        pMonth.textContent = months[month];
        pYear.textContent = year;
        
        if(hour>=12){
            hour = hour - 12;
            ampm = 'PM';
        }
        else{
            ampm = 'AM';
        }
        if(hour == 0){
            hour = 12;
        }
        pHours.textContent = hour+":";
        
        if(minutes<10){
           minutes = "0" + minutes;
        }
        pMinutes.textContent = minutes;
        pAMPM.textContent = ampm;
    };
    
    refreshHour();
    var interval = setInterval(refreshHour, 1000);
    
}());

//Change Title
function changeTitle(){
    
    var newtitle = document.getElementById("inputTitle").value,
        title2 = document.getElementById('title2');
    
    if(newtitle!=''){
        document.title = newtitle;
        title2.textContent = newtitle;
    }
    else{
        inputTitle.setAttribute("placeholder", "Add a title");
        return false;
    }
}

//Background color
function changeBackgroundColour(){
    
    var background = document.getElementById("background");
    var colorValue = document.getElementById("color").value;
    
    if(colorValue=="blue"){
       background.className = "blue";
    }
    else if(colorValue=="green"){
       background.className = "green";
    }
    else if(colorValue=="yellow"){
       background.className = "yellow";
    }
    else if(colorValue=="pink"){
        background.className = "pink";
    }
    else if(colorValue=="default"){
        background.className = "default";
    }   
    
}

//Container color
function changeContainerColour(){
    
    var background = document.getElementById("container");
    var colorValue = document.getElementById("color2").value;
    
    if(colorValue=="blue"){
       background.className = "blue";
    }
    else if(colorValue=="green"){
       background.className = "green";
    }
    else if(colorValue=="yellow"){
       background.className = "yellow";
    }
    else if(colorValue=="pink"){
        background.className = "pink";
    }
    else if(colorValue=="default2"){
        background.className = "default2";
    }
}

//Tasks
function getDay(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    return weekday[d.getDay()];
  }
  
  function readTextFile(file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function() {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
              callback(rawFile.responseText);
          }
      }
      rawFile.send(null);
  }
  
  readTextFile("./tasks.json", function(text){
      var data = JSON.parse(text);
      
      data.forEach(item => {
        if(item.day === getDay()){
          
          var parafTime = document.createElement("p");
          var time = document.createTextNode(item.time);
          var parafDescr = document.createElement("p");
          var description = document.createTextNode(item.description);
  
          parafTime.appendChild(time)
          parafDescr.appendChild(description)
  
          document.getElementById("time").appendChild(parafTime);
          document.getElementById("description").appendChild(parafDescr);
        }
      })
  });

function getTomorrow(){
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
  
    return weekday[d.getDay() + 1];
  }

readTextFile("./tasks.json", function(text){
      var data = JSON.parse(text);
    
      data.forEach(item => {
        if(item.day === getTomorrow()){

          var parafTime = document.createElement("p");
          var time = document.createTextNode(item.time);
          var parafDescr = document.createElement("p");
          var description = document.createTextNode(item.description);
  
          parafTime.appendChild(time)
          parafDescr.appendChild(description)
  
          document.getElementById("time2").appendChild(parafTime);
          document.getElementById("description2").appendChild(parafDescr);
        }
      })
  });