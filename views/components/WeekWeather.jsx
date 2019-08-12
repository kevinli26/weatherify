//components
var React = require('react');
var Card = require('react-bootstrap/Card');

// import {
//     XYPlot,
//     XAxis,
//     YAxis,
//     LineMarkSeries,
//     makeVisFlexible
// } from 'react-vis';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryAxis,
} from 'victory'

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
          <Card.Title style={sectionTitle}><h2><b>This and next week</b></h2></Card.Title>
          <Card.Text>{this.props.weekSummary}</Card.Text>
          <div id="parent" className="centered">
          {/* <XYPlot color= "#ffc107" xType="ordinal" width={1340} height={400}>
  
            <XAxis/>
            <YAxis title="&#8451;"/>
            <LineMarkSeries
              lineStyle={{stroke: '#007bff'}}
              markStyle={{stroke: '#ffc107'}}
              curve={'curveMonotoneX'}
              data = {this.props.data}
            />
         
          </XYPlot> */}
          <VictoryChart
             padding={{
              top:15,
              bottom:15,
              left:20,
              right:20,
            }}
            domainPadding={20}
            height={150}
          >
            <VictoryLine
            //supply data
              interpolation="natural"
              style={{
                data: { stroke: "#ffc107", strokeWidth: 1 },
                parent: { border: "1px solid #ccc"}
              }}
              data={this.props.data}
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
              
              <VictoryAxis dependentAxis
                  style={{
                    axis: {stroke: "#756f6a"},
                    // axisLabel: {fontSize: 20, padding: 30},
                    ticks: {stroke: "grey", size: 3},
                    tickLabels: {fontSize: 4, padding:6}
                  }}
              />
          </VictoryChart>
          </div>
        </Card.Body>
      </Card>
      );
    }
}
module.exports = WeekWeather;