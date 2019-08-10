//components
//express-react-views only supports static markup, meaning that what the user sees is final, nothing will change after, there is no javascript required for this
var React = require('react');
var SearchedLocation = require('./components/SearchedLocation.jsx');
var Title = require('./components/title.jsx');
var CurrentWeather = require('./components/CurrentWeather.jsx');
var WeekWeather = require('./components/WeekWeather.jsx');
var TodayWeather = require('./components/TodayWeather.jsx')
var Footer = require('./components/Footer.jsx')

//js css
const background = {
  backgroundColor: '#f8f9fa',
}

//TO-DO: create an emergency alert component


//define and export the APP component, this is the heart of this application
class App extends React.Component {
  render() {
    return (
      <head>
        <body style={background}>
        {/* cdn scripts and css styles */}
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"></link> 
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css'/>

        <Title/>
        <SearchedLocation time={this.props.time} location={this.props.location} timeZone={this.props.timeZone} timeZoneLocation={this.props.timeZoneLocation}/>
        <CurrentWeather data={this.props.rightNow}/>
        <TodayWeather data={this.props.daily} dailySummary={this.props.dailySummary}/>
        <WeekWeather/>
        <Footer/>
        </body>
        
      </head>
    );
  }
}
module.exports = App;