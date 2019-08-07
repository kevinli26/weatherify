//express-react-views only supports static markup, meaning that what the user sees is final, nothing will change after, there is no javascript required for this
var React = require('react');

const background = {
    backgroundColor: '#f8f9fa',
}

class Error extends React.Component {
  render() {
    return (
      <head>
        <body style={background}>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <h1>{this.props.errormessage}</h1>
        </body>
      </head>
    );
  }
}
module.exports = Error;