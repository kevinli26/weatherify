var placesAutocomplete = places({
	appId: "plKF2VNJFMTB",
	apiKey: "59c01f09a565a025cbb25fa38374d59c",
	container: document.querySelector('#inputAddress')
});

function generateStylesheet() {
	let bg = document.getElementById('dynamicBackground');
	let currentTime = new Date().getHours(); //gets in 24 hour format

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

function getContainerWidth() {
	axios.post('/fetchWidth', {
		width: window.screen.availWidth,
	});
	alert("clicked")
}
function fetchWeather() { 
	
	// axios.post('/test', {
	// 	location: document.getElementById('inputAddress').value
	// }).then( (res) => {
	// 	console.log(res);
	// }).catch( (err) => {
	// 	console.log(err);
	// });

	axios.post('/weather', {
		location: 'vancouver',
	}).then( (res) => {console.log(res)})
	.catch( (err) => {console.log(err)});
}

// function test() {
// 	console.log(document.getElementById('inputAddress').value);
// }