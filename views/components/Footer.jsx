var React = require('react');

//define and export the component
class Footer extends React.Component {
    render() {
      return(
        <p style={{textAlign:'center'}}>Powered by Dark Sky</p>
      );
    }
}
module.exports = Footer;