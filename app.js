var is_debug = true;


$(function(){

	init();
})


function init(){

	getPosition()

}


function getPosition(){

	debug("getting position....")

	if(is_debug){ // if debug use fake location
    getWeather(45.559394399999995,10.2037211)

  } else {
    navigator.geolocation.getCurrentPosition(function(position) {
      debug(position)
      getWeather(position.coords.latitude,position.coords.longitude)
    });
  }
	
}


function getWeather(lat, lng){


	debug("getting weather of lat:" + lat+", lng: "+lng)

  $.simpleWeather({
    location: lat+","+lng,
    woeid: '',
    unit: 'c',
    success: function(w){
      renderWeather(w)
    },
    error: function(){
      debug("ERROR! receiving meteo")
    }
  })

	
}


function renderWeather(w){

	debug(w)

	$("#weather .location").text(w.city)
  	$("#weather .condition").text(w.currently)
  	$("#weather .temperature .current .value").text(w.temp)
  	$("#weather .temperature .high .value").text(w.high)
  	$("#weather .temperature .low .value").text(w.low)

	
}


function debug(obj){

	console.log(obj)
}