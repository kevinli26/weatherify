const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const port = 4000;
const fnc = require('./routes/backendFunctions.js'); //include backendFunctions
const moment = require('moment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.set('view engine', 'ejs');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(__dirname + '/public'));


app.get('/ping', (req, res) => {
	console.log("pong");
	res.end();
})

//TO-DO: modularize the different functions, organize it better, put into different routes then import these routes, use as many helper functions as possible, still want to stick with server-side rendering
app.post('/weather', (req,res) => {
	//opecagedata api to fetch long and lat from address via geocoding
	const geoKey = "bc01996fe2d64f76a01fa21e9eeb63a3";
	let location = req.body.location;
	location = encodeURIComponent(location);
	let geourl ="https://api.opencagedata.com/geocode/v1/json?q="+location+"&key="+geoKey; 
	let latitude = "";
	let longitude = "";
	request(geourl, function (err, response, body) {
		if(err){
	    	console.log('error:', err);
			res.render('error.jsx', { errormessage: "Unable to get the geocoding data."});
	    } else{
			let resultLocation = JSON.parse(body)
			
	    	//no results hence invalid address
	    	if (resultLocation.total_results == 0) {
	    		console.log('error:', err);
				res.render('error.jsx', { errormessage: "invalid address"});
	    	}

	    	else {
	    		console.log("valid address");
		    	let bounds = ((resultLocation.results)[0]).geometry;
		    	latitude = bounds.lat;
		    	longitude = bounds.lng;
		    	//call darksky api to get weather data based on the long and lat
				let apiKey = '987b2fb820686e246e617bc308c3d206';
				let url = 'https://api.darksky.net/forecast/'+apiKey+'/'+latitude+','+longitude;

				request(url, function (err, response, body) {
					if(err){
				    	console.log('error:', error);
						res.render('error.jsx', { errormessage: "Unable to get the weather data."});
						
				    } else{
						console.log("serving weather info");
						let weather = JSON.parse(body); //parse to json so we can handle it
						
						//print everything for debugging and info purposes
						var parsed = JSON.stringify(weather, null, 2);
						console.log(parsed);
						

						//Right now
						let current = weather.currently;
						let currentTime = moment.unix(current.time).format("LLL");//current time in context of the timezone of the user
						let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
						let timeZoneLocation = weather.timezone; //timezone of the searched location (disregarding the users location)	

						//today
						let today = weather.hourly.data;
						let todaySummary = weather.hourly.summary;
						today = fnc.parseToday(today,currentTime);
						//console.log(JSON.stringify(today, null, 2));
						
						const data = {
							location: decodeURIComponent(location), //user entered location
							time: currentTime,
							rightNow: current,
							daily: today, //data for daily weather (data as parsed due to requirements)
							dailySummary: todaySummary,
							timeZone: timeZone,
							timeZoneLocation: timeZoneLocation,
						}

						res.render('weather.jsx', data );
				  	}
				});
	    	}
	  	}
	});
});

app.get('/', (req, res) => {
	res.render('search.ejs');
});

app.listen(port, () => { console.log('Listening on port: ' + port) });
