var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");	


function startWeather(pageLocation) {
	
	function GetWeather() {
		// Retrieve weather from server
		//
		var theUri = "/data/info/weather/forecast"
		httpGetAsync(theUri, createWeather);
		// (as XMLHttpRequest is being used async,
		// return the createWeather as callback)
		//
	}
	
	function createWeather(data) {
		//
		// Parse json
//		dataJson = JSON.parse(data)
		
		//
		// Exploitation of data
		
		//
		// Generate DOM objects
		var weatherDiv = document.createElement("DIV");
		weatherDiv.textContent = data;
		//
		// Add to body of document
		document.getElementById(pageLocation).innerHTML = "";
		document.getElementById(pageLocation).appendChild(weatherDiv);
	}
	
	GetWeather();
	setInterval(GetWeather, 100000); //10minutes
}