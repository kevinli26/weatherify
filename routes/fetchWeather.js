//route for user searching their location
//only include required modules for this specific route, all other app setup/initiation work will be done in the main server file
const express = require('express');
var router = express.Router();
const fnc = require('./backendFunctions.js');
const moment = require('moment');
const axios = require('axios'); 
const geoKey = "bc01996fe2d64f76a01fa21e9eeb63a3"; //To-Do: hide this safely when deploying

router.post('/', (req,res) => {
	//opecagedata api to fetch long and lat from address via geocoding
	let location = req.body.location;
	location = encodeURIComponent(location);
	let geourl ="https://api.opencagedata.com/geocode/v1/json?q="+location+"&key="+geoKey; 
	let latitude, longitude;
	axios({
		method: 'get',
		url: geourl,
	}).then( response => {
		let resultLocation = response.data; //response from API

		//no results hence invalid address
		if (resultLocation.total_results == 0) {
			console.log('Invalid address, error:', err);
			res.render('error.jsx', { errormessage: "invalid address"});
		}

		else {
			console.log("Valid address");
			let bounds = ((resultLocation.results)[0]).geometry;
			latitude = bounds.lat;
			longitude = bounds.lng;
			//call darksky api to get weather data based on the long and lat
			let apiKey = '';
			let weatherurl = 'https://api.darksky.net/forecast/'+apiKey+'/'+latitude+','+longitude+'?exclude=minutely,flags';

			axios({
				method: 'get',
				url: weatherurl,
			}).then( response => {
				console.log("Got weather data, serving data now");
				console.log("serving weather info");
				let weather = response.data; //parse to json so we can handle it
				
				// // print everything for debugging and info purposes
				// var parsed = JSON.stringify(weather, null, 2);
				// console.log(parsed);
				
				//Right now
				let current = weather.currently;
				let currentTime = moment.unix(current.time).format("LLL");//current time in context of the timezone of the user
				let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
				let timeZoneLocation = weather.timezone; //timezone of the searched location (disregarding the users location)	

				//today
				let day = weather.hourly.data;
				let daySummary = weather.hourly.summary;
				day = fnc.parseToday(day);
				
				//Week
				let week = weather.daily.data;
				let weekSummary = weather.daily.summary;
				weekSummary = fnc.parseWeekSummaryMessage(weekSummary)
				week = fnc.parseWeek(week);
										
				const data = {
					//right now
					location: decodeURIComponent(location), //user entered location
					time: currentTime,
					rightNow: current,
					//for the day
					day: day, //data for daily weather (data as parsed due to requirements)
					daySummary: daySummary,
					//for the week
					weekSummary: weekSummary,
					week: week,
					//general user search information
					timeZone: timeZone,
					timeZoneLocation: timeZoneLocation,
				}

				res.render('App.jsx', data );
			}).catch( err => {
				console.log('Unable to get weather data, error:', err);
				res.render('error.jsx', { errormessage: "Unable to get the weather data."});
			})
		}
	}).catch( err => {
		console.log('error:', err);
		res.render('error.jsx', { errormessage: "Unable to get the geocoding data."});
	})
});

module.exports = router;
