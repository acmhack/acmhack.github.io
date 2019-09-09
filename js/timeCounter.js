  var countDown = function(theSelector, time){
	var output = "";
	var dTime = Date.parse(time);
  var theDate = Date.parse(new Date());
  var difference = dTime - theDate;
  var milliseconds = difference % 1000;

  function addZero(number){
  	if(number <= 9){
    	number = "0" + number;
    }
    return number;
  }

  x = difference / 1000;
  seconds = addZero(parseInt(x % 60));
  x /= 60;
  minutes = addZero(parseInt(x % 60));
  x /= 60;
  hours = addZero(parseInt(x % 24));
  x /= 24;
  days = addZero(parseInt(x));

  output += "<span class='days'>" + days + "<i class='small' style='display: block'>Days</i></span>";
  output += "<span class='hours'>" + hours + "<i class='small' style='display: block'>Hours</i></span>";
  output += "<span class='minutes'>" + minutes + "<i class='small' style='display: block'>Mins</i></span>";
  output += "<span class='seconds'>" + seconds + "<i class='small' style='display: block'>Secs</i></span>";
  document.querySelector(theSelector).innerHTML = output;
}
