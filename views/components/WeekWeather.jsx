//components
var React = require('react');
var Card = require('react-bootstrap/Card');
var ListGroup = require('react-bootstrap/ListGroup');
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
    LabelSeries,
} from 'react-vis';


//js css
const sections = {
    margin: '20px',
}

const sectionTitle = {
    marginBottom: '-8px',
}


//define and export the component
class WeekWeather extends React.Component {
    render() {
      return(
        <Card style={sections}>
        <Card.Body>
          <Card.Title style={sectionTitle}><h2><b>This Week</b></h2></Card.Title>
          <Card.Text>{this.props.dailySummary}</Card.Text>
          <div id="parent" className="centered">
          <XYPlot color= "#ffc107" xType="ordinal" width={1250} height={400}>
  
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
module.exports = WeekWeather;