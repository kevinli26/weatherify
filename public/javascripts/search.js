
// function sendAddress() {
// 	let inputAddress = document.getElementById("inputAddress").value;
// 	var xhr = new XMLHttpRequest();
// 	var params = 'address='+inputAddress;
// 	xhr.open('POST', '/sendAddress', true);
// 	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// 	xhr.onreadystatechange = () =>{//Call a function when the state changes.
// 	    if(xhr.readyState == 4 && xhr.status == 200) {
// 	    	//the resulting weather json, do something with this now
// 	    	if (xhr.responseText == "invalidAddress") {
// 	    		alert("You have entered an invalid address");
// 	    	} else {
// 	    		//alert(xhr.responseText);
// 	    		var bah = new XMLHttpRequest();
// 				bah.open('GET', '/showWeather', true);
// 				bah.onload = function () {
// 				  //alert("You have entered a valid address");
// 				};
// 				bah.send();

// 	    	}
// 	    }
// 	}
// 	xhr.send(params);
// 	document.getElementById("inputAddress").value = "";
// 	document.getElementById("submitAddress").blur();
// }

// placeSearch({
// 	key: "N4w8F9iLDQU74TVcG8JWmtoRNdjJYb68",
// 	container: document.querySelector('#inputAddress'),
// 	useDeviceLocation: true,
// });

var placesAutocomplete = places({
	appId: "plKF2VNJFMTB",
	apiKey: "59c01f09a565a025cbb25fa38374d59c",
	container: document.querySelector('#inputAddress')
});

function generateStylesheet() {
	let bg = document.getElementById('dynamicBackground');
	let currentTime = new Date().getHours(); //gets in 24 hour format
	//alert(currentTime);

	//night
	if ( (0 <= currentTime && currentTime < 5) || currentTime == 24) {
		bg.className = "auroral-northern-intense";
	}

	//morning
	if (5 <= currentTime && currentTime < 12) {
		bg.className  = "auroral-northern-warm";
	}

	//afternoon
	if (12 <= currentTime && currentTime < 17) {
		bg.className  = "auroral-northern-dusk";
	}

	//early evening
	if (17 <= currentTime && currentTime < 21) {
		bg.className = "auroral-northern-dimmed";
	}

	//late evening
	if (21 <= currentTime && currentTime < 24) {
		bg.className = "auroral-northern";
	}
}

// function fetchWeather() { 
	
// 	// axios.post('/test', {
// 	// 	location: document.getElementById('inputAddress').value
// 	// }).then( (res) => {
// 	// 	console.log(res);
// 	// }).catch( (err) => {
// 	// 	console.log(err);
// 	// });

// 	axios({
// 		method: 'POST',
// 		url: '/weather',
// 		data: {location: document.getElementById('inputAddress').value},
// 	}).then( (res) => {
// 		res.render('weather.jsx', data );
// 		console.log(res);
// 	}).catch( (err) => {
// 		console.log(err);
// 	});
// }

// function test() {
// 	console.log(document.getElementById('inputAddress').value);
// }