//Pre-condition: given the raw json data for hourly weather data for the next ~24 hours
//Post-condition: parse it so only the data for the current day (of the user's location) is within the json, and convert the x-y coordinates to hour(24hr format)-celcius
function parseDayData(unparsed, currentTime){
	let parsed = new Array(); //only want this array to contain the data for the current day
	let temp = currentTime.split(" ");
	const currentDate = temp[1].substring(0, temp[1].length - 1); //get current date

	for (let i = 0; i < unparsed.length; i++){
		//create bar in the bar graph
		let eachHour = new Object();
		var rawDate = moment.unix(unparsed[i].time).format("LLL");
		temp = rawDate.split(" ");
		let time = temp[3] + " " + temp[4];
		if ((temp[1].substring(0, temp[1].length - 1) != currentDate)) break; //break out of loop if current date dosent match
		

		// eachHour.x = parseInt(moment(time, "hh:mm A").format("HH:mm"), 10);
		eachHour.x = time;
		eachHour.y = FtoC(unparsed[i].temperature);
		parsed.push(eachHour);
		
	}
	return parsed;
}