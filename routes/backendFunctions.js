const moment = require('moment');

//converts fahrenheit to celcius
function FtoC(f){
	return ( (f - 32)*(5/9) );
}

//builds the TODAY json data based on the RAW TODAY data and current date
function parseToday(unparsed) {
    let parsed = new Array(); //only want this array to contain the data for the current day
    let counter = 0;

    for (let i = 0; i < unparsed.length; i++){
        //create bar in the bar graph
        let eachHour = new Object();
        var rawDate = moment.unix(unparsed[i].time).format("LLL");
        temp = rawDate.split(" ");
        let time = temp[3] + " " + temp[4];

        if (counter++ == 24) break;

        eachHour.x = time;
        eachHour.y = FtoC(unparsed[i].temperature);
        parsed.push(eachHour);
    }
    return parsed;
}

function parseWeekSummaryMessage(unparsed) {
    let words = unparsed.split(" ");

    let parsed = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes('°F')) {
            let temperature = words[i].substring(0, words[i].length-2);
            words[i] = FtoC(temperature).toFixed(2) + "°C";
        }
        parsed += words[i];
        if (i != words.length) parsed += " ";
    }
    return parsed;
}

function parseWeek(unparsed) {
    let parsed = new Array();

    for (let i = 0; i < unparsed.length; i++){
        //create bar in the bar graph
        let eachDay = new Object();
        let temperature = (unparsed[i].temperatureHigh + unparsed[i].temperatureLow)/2;
        var rawDate = moment.unix(unparsed[i].time).format("LLL");
        temp = rawDate.split(" ");
        temp[1] = temp[1].substring(0,temp[1].length-1);
        let time = temp[0] + " " + temp[1];
        eachDay.x = time;
        eachDay.y = FtoC(temperature);
        parsed.push(eachDay);
    }
    return parsed;
}

module.exports = {
    parseToday: parseToday,
    parseWeek: parseWeek,
    parseWeekSummaryMessage: parseWeekSummaryMessage,
};