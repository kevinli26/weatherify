const moment = require('moment');

//converts fahrenheit to celcius
function FtoC(f){
	return ( (f - 32)*(5/9) );
}

//builds the TODAY json data based on the RAW TODAY data and current date
function parseToday(unparsed, currentTime) {
    let parsed = new Array(); //only want this array to contain the data for the current day
    let temp = currentTime.split(" ");
    const currentDate = temp[1].substring(0, temp[1].length - 1); //get current date
    let counter = 0;
    for (let i = 0; i < unparsed.length; i++){
        //create bar in the bar graph
        let eachHour = new Object();
        var rawDate = moment.unix(unparsed[i].time).format("LLL");
        temp = rawDate.split(" ");
        let time = temp[3] + " " + temp[4];
       // if ((temp[1].substring(0, temp[1].length - 1) != currentDate)) break; //break out of loop if current date dosent match
        if (counter++ == 24) break;
        eachHour.x = time;
        eachHour.y = FtoC(unparsed[i].temperature);
        parsed.push(eachHour);
    }
    return parsed;
}

function parseTodayBar(parsed) {
    let parsedBar = JSON.parse(JSON.stringify(parsed))
    parsedBar.forEach( (obj) => {
        obj.label = ( obj.y.toString() );
    })
    return parsedBar
}


module.exports = {
    parseToday: parseToday,
    parseTodayBar: parseTodayBar
};