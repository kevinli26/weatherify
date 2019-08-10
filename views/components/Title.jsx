//components
var React = require('react');
var Badge = require('react-bootstrap/Badge');


//js css
const headerStyle = {
    textAlign: 'center',
    paddingTop: '20px',
}


//define and export the component
class Title extends React.Component {
    render(){
      return(
        <h1 style={headerStyle}>
          Weatherify <Badge variant="primary">Beta</Badge>
        </h1>
      );
    }
}
module.exports = Title;