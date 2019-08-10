//components
var React = require('react');
var Card = require('react-bootstrap/Card');


//javascript css notation (this is considered best practices in react, please try to consistently do this)
const sections = {
    margin: '20px',
}


//define and export the component
class SearchedLocation extends React.Component {
    render() {
      return(
        <Card style={sections}>
        <Card.Body>
          <Card.Title><h2><b>{this.props.location} {this.props.timeZoneLocation.replace("_"," ")}</b></h2>{this.props.time} in {this.props.timeZone}</Card.Title>
          <hr></hr>
          {/* used to hydrate the client side. implemented without clientside mounting as isomorphic web apps have many drawbacks */}
          <div dangerouslySetInnerHTML={{__html:
              `
              <button style="border-radius: 8px; font-size:15px; padding: 8px;"
               onclick="window.location='/'">Search another location</button>
              `
          }}/>
        </Card.Body>
      </Card>
      );
    }
}
module.exports = SearchedLocation;