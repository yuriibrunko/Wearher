$(document).ready(function (){
  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
    success: function(data) {
      console.log(data);
      var dat =  new Date();
      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        var weekDay = [
          "Sunday",  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",  
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var weekIndex = date.getDay();
        var year = date.getFullYear();
      
        return monthNames[monthIndex] + ', ' + day + ' ' + year + ' - ' + weekDay[weekIndex];
      }
      
     
      var hour = dat.getHours();
      var min = dat.getMinutes();
      $(".title").html(formatDate(new Date()));
      $('.time').html(hour + ' : ' + min);
      $(".humidity").html('Humidity: ' + data.main.humidity + ' %');
      $(".pressure").html('Pressure: ' + data.main.pressure + ' hPa');
      $(".wind").html('Wind: ' + data.wind.speed + ' km/h SSE');
      $(".temp").html(data.main.temp + ' °С');
      $(".description").html(data.weather[0].description);
      console.log(data.weather[0].icon);
      $(".icon").html('<img src="http://openweathermap.org/img/w/' + data.weather[0].icon + '.png">');
    }
  });
 

  
});