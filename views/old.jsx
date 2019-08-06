//static react component rendering
var React = require('react');
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup'
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from 'react-vis';

function FtoC(f){
	return ( (f - 32)*(5/9) ).toFixed(1);
}

const headerStyle = {
  textAlign: 'center',
  paddingTop: '20px',
}

const sections = {
  margin: '20px',
}

const background = {
  backgroundColor: '#f8f9fa',
  height:'100%',
}

const sectionTitle = {
  marginBottom: '-8px',
}

const inlineTime = {
  fontSize: '1.5rem',
  float:'right',
}

const icon = {
  fontSize:'2rem',
  marginRight:'1rem',
  width: '3rem',
  textAlign:'center',
}

class Title extends React.Component {
  render(){
    return(
      <h1 style={headerStyle}>
        Weatherify <Badge variant="primary">Beta</Badge>
      </h1>
    );
  }
}

class SearchedLocation extends React.Component {
  render() {
    return(
      <Card style={sections}>
      <Card.Body>
        <Card.Title><h2><b>{this.props.location}</b></h2>{this.props.time}</Card.Title>
        <hr></hr>
        <Button variant="outline-secondary" onClick={() => fetch('/', {method:'GET'})}>
          Search another location
        </Button>
      </Card.Body>
    </Card>
    );
  }
}

class CurrentWeather extends React.Component {
  render() {
    return(
      <Card style={sections}>
      <Card.Body>
        <Card.Title style={sectionTitle}><h2><b>Right now</b></h2></Card.Title>
        <Card.Text>{this.props.data.summary}</Card.Text>

        <div className="centered">
        <Card style={{ width: '100wh' }}>
          <ListGroup variant="flush">

            <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
              <i style={icon} class="wi wi-day-sunny"></i>
              <span>{FtoC(this.props.data.temperature)}  &#8451;, but feels like {FtoC(this.props.data.apparentTemperature)} &#8451;.</span>
            </ListGroup.Item>

            <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
              <i style={icon} class="wi wi-small-craft-advisory"></i>
              <span>{this.props.data.summary} for the hour.</span>
            </ListGroup.Item>


            <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
              <i style={icon} class="wi wi-raindrops"></i>
              <span>There is a {this.props.data.precipProbability} PoP chance that it will rain with an intensity of {this.props.data.precipIntensity}.</span>
            </ListGroup.Item>

            <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
              <i style={icon} class="wi wi-humidity"></i>
              <span>Humidity is {this.props.data.humidity * 100}% with a dewpoint of {this.props.data.dewPoint}.</span>
            </ListGroup.Item>

            <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
              <i style={icon} class="wi wi-barometer"></i>
              <span>Pressure is currently at a steady {this.props.data.pressure} hPa.</span>
            </ListGroup.Item>

            <ListGroup.Item style={{display:'flex', alignItems:'center'}}>
              <i style={icon} class="wi wi-hot"></i>
              <span>UV levels are approximately {this.props.data.uvIndex} at the moment.</span>
            </ListGroup.Item>

          </ListGroup>
        </Card>
        </div>

      </Card.Body>
    </Card>
    );
  }
}

class TodayWeather extends React.Component {
  render() {
    return(
      
      <Card style={sections}>
      <Card.Body>
        <Card.Title style={sectionTitle}><h2><b>Next 24 hours</b></h2></Card.Title>
        <Card.Text>{this.props.dailySummary}</Card.Text>
        <div id="parent" className="centered">
        <XYPlot color= "#ffc107" xType="ordinal" width={1300} height={400}>

          <XAxis/>
          <YAxis />
          <VerticalBarSeries
           data = {this.props.data}
          />
       
        </XYPlot>
        </div>
      </Card.Body>
    </Card>
    );
  }
}

class Footer extends React.Component {
  render() {
    return(
      <p>Made by Kevin Li with Dark</p>
    );
  }
}

class WeekWeather extends React.Component{
  render() {
    return(
      <Card style={sections}>
      <Card.Body>
        <Card.Title style={sectionTitle}><h2><b>This Week</b></h2></Card.Title>
        <Card.Text>{this.props.dailySummary}</Card.Text>
        <div id="parent" className="centered">
        <XYPlot color= "#ffc107" xType="ordinal" width={1300} height={400}>

          <XAxis/>
          <YAxis />
          <VerticalBarSeries
           data = {this.props.data}
          />
       
        </XYPlot>
        </div>
      </Card.Body>
    </Card>
    );
  }
}


class Main extends React.Component {
  render() {
    return (
      <head>
        <body style={{ overflowY: 'scroll'}}>
          <div style={background}>
            <Title/>
            <SearchedLocation time={this.props.time} location={this.props.location}/>
            <CurrentWeather data={this.props.rightNow}/>
            <TodayWeather data={this.props.daily} dailySummary={this.props.dailySummary}/>
            <WeekWeather/>
            <Footer/>
          </div>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"></link> 
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css'/>
        </body>
      </head>
    );
  }
}

module.exports = Main;