function httpGetAsync(theUri, callback)
{
    // Change the below to match the HomeControl-server IP
	var serverIP = "http://192.168.0.3:1600"
	var theUrl = serverIP + theUri
	//
	var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(stringFix(xmlHttp.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    //
}

function stringFix(string) {
	string = string.split('u\'').join('"');
	string = string.split('\'').join('"');
	return string;
}