//components
var React = require('react');
var Card = require('react-bootstrap/Card');
var ListGroup = require('react-bootstrap/ListGroup');


//javascript css notation (this is considered best practices in react, please try to consistently do this)
const sections = {
    margin: '20px',
}

const sectionTitle = {
    marginBottom: '-8px',
}

const icon = {
    fontSize:'2rem',
    marginRight:'1rem',
    width: '3rem',
    textAlign:'center',
}


//helper functions
function FtoC(f){
	return ( (f - 32)*(5/9) ).toFixed(2);
}

//dynamically render cloud cover conditions based on conditional state of cc percentage
function CloudCoveringDescription(ccp) {
  if (ccp > 0 && ccp < 25) return "Clear Skies";
  if (ccp > 25 && ccp < 75) return "Scattered Clouds";
  if (ccp > 75 && ccp < 99) return "Broken Clouds";
  if (ccp == 100) return "Overcast";
  else return "Moderately Clear";
}

function VisibilityLevelsDescription(vl) {
  if (vl == 0) return "dense fog, can see clearly up to a distance of 50 m";
  else if (vl == 1) return "thick fog, can see clearly up to a distance of 200 m";
  else if (vl == 2) return "moderate fog, can see clearly up to a distance of 500 m";
  else if (vl == 3) return "light fog, can see clearly up to a distance of 1 km";
  else if (vl == 4) return "thin fog, can see clearly up to a distance of 2 km";
  else if (vl == 5) return "haze, can see clearly up to a distance of 4 km";
  else if (vl == 6) return "light haze, can see clearly up to a distance of 10 km";
  else if (vl == 7) return "clear, can see clearly up to a distance of 20 km";
  else if (vl == 8) return "very clear, can see clearly up to a distance of 50 km";
  else return "extremely clear, can see clearly well past 50 km"
}

function WindSpeedIcon(props) {
  let speed = Math.floor(props.ws);
  if (speed == 0) return (<i style={icon} className="wi wi-wind-beaufort-0"></i>);
  else if (speed == 1) return (<i style={icon} className="wi wi-wind-beaufort-1"></i>);
  else if (speed == 2) return (<i style={icon} className="wi wi-wind-beaufort-2"></i>);
  else if (speed == 3) return (<i style={icon} className="wi wi-wind-beaufort-3"></i>);
  else if (speed == 4) return (<i style={icon} className="wi wi-wind-beaufort-4"></i>);
  else if (speed == 5) return (<i style={icon} className="wi wi-wind-beaufort-5"></i>);
  else if (speed == 6) return (<i style={icon} className="wi wi-wind-beaufort-6"></i>);
  else if (speed == 7) return (<i style={icon} className="wi wi-wind-beaufort-7"></i>);
  else if (speed == 8) return (<i style={icon} className="wi wi-wind-beaufort-8"></i>);
  else if (speed == 9) return (<i style={icon} className="wi wi-wind-beaufort-9"></i>);
  else if (speed == 10) return (<i style={icon} className="wi wi-wind-beaufort-10"></i>);
  else if (speed == 11) return (<i style={icon} className="wi wi-wind-beaufort-11"></i>);
  else if (speed == 12) return (<i style={icon} className="wi wi-wind-beaufort-12"></i>);
  else return (<i style={icon} className="wi wi-strong-wind"></i>);
}

//define and export the component
class CurrentWeather extends React.Component {
    render() {
      return(
        <Card style={sections}>
        <Card.Body>
          <Card.Title style={sectionTitle}><h2><b>Right now</b></h2></Card.Title>
          <Card.Text>{this.props.data.summary} for the hour</Card.Text>
  
          <div className="centered">
          <Card style={{ width: '100wh' }}>
            <ListGroup variant="flush">
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-thermometer"></i>
                <span>{FtoC(this.props.data.temperature)}  &#8451;, and feels like {FtoC(this.props.data.apparentTemperature)} &#8451;.</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-raindrops"></i>
                <span>There is a {this.props.data.precipProbability} PoP chance that it will rain with an intensity of {this.props.data.precipIntensity}.</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-humidity"></i>
                <span>Humidity is at {(this.props.data.humidity * 100).toFixed(2)}% with a dewpoint of {FtoC(this.props.data.dewPoint)} &#8451;.</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-barometer"></i>
                <span>Pressure is currently at a steady {this.props.data.pressure} hPa.</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-hot"></i>
                <span>UV levels are at an index of {this.props.data.uvIndex}, with ozone levels at {this.props.data.ozone}.</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-cloudy"></i>
                <span>{(this.props.data.cloudCover * 100).toFixed(2)}% Cloud Cover - Observation: { CloudCoveringDescription((this.props.data.cloudCover * 100).toFixed(2)) }.</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <i style={icon} className="wi wi-day-haze"></i>
                <span>Visibility levels are {(this.props.data.visibility)}/10, {VisibilityLevelsDescription(this.props.data.visibility)+"."}</span>
              </ListGroup.Item>
  
              <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
                <WindSpeedIcon ws = {this.props.data.windSpeed}/>
                <span>Wind speeds are at {this.props.data.windSpeed} with periodic gusts up to {this.props.data.windGust}.</span>
              </ListGroup.Item>
  
            </ListGroup>
          </Card>
          </div>
  
        </Card.Body>
      </Card>
      );
    }
}
module.exports = CurrentWeather;