//import required node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

//import modularized routes
var fetchWeather = require('./routes/fetchWeather.js');
var searchLocation = require('./routes/searchLocation.js');

//set up template engines for the entire app
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.set('view engine', 'ejs');
app.engine('jsx', require('express-react-views').createEngine());

//set up required express middeware for the entire app, so this applies to the modularized routes aswell
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
//application routes
app.use('/weather', fetchWeather);
app.use('/', searchLocation);

//launch app on the designated port
app.listen(port, () => { console.log('Listening on port: ' + port) });
