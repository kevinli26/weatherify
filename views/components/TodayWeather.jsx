//include used components
var React = require('react');
var Card = require('react-bootstrap/Card');
var ListGroup = require('react-bootstrap/ListGroup');
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
} from 'react-vis';

import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryLegend,
  VictoryLine,
  VictoryAxis
} from 'victory'

//js css
const sections = {
    margin: '20px',
}

const sectionTitle = {
    marginBottom: '-8px',
}

const sectionSummary = {
  marginBottom: '-8px',
}


//define and export the component
class TodayWeather extends React.Component {
    render() {
      return(
        <Card style={sections}>
        <Card.Body>
          <Card.Title style={sectionTitle}><h2><b>Next 24 hours</b></h2></Card.Title>
          <Card.Text style={sectionSummary}>{this.props.daySummary}</Card.Text>
          <div id="parent" className="centered">

          
          <VictoryChart
            padding={{
              top:8,
              bottom:15,
              left:5,
              right:5,
            }}
            domainPadding={10}
            height={150}
          >
            <VictoryBar
                //supply data
                data={this.props.data}
                //supplying and styling the labels
                labels={(d) => `${(d.y).toFixed(0)} ℃`}

                style={{ 
                  data: { fill: "#ffc107" },
                  labels: {
                    fontSize: "4px"
                  }
                }}
                //visual sizing of chart
                barRatio={0.8}
                theme={VictoryTheme.material}
              />
              <VictoryAxis
                style={{
                  axis: {stroke: "#756f6a"},
                  // axisLabel: {fontSize: 20, padding: 30},
                  ticks: {stroke: "grey", size: 3},
                  tickLabels: {fontSize: 4, padding:6}
                }}
              />

          </VictoryChart>
           
      

    

          {/* <XYPlot color= "#ffc107" xType="ordinal" width={1340} height={400}>
  
            <XAxis/>
            <YAxis title="&#8451;"/>
            <VerticalBarSeries
             data = {this.props.data}
            />
         
          </XYPlot> */}
          </div>
        </Card.Body>
      </Card>
      );
    }
  }
module.exports = TodayWeather;