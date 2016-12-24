const React = require('react');

const Results = React.createClass({
  render: function(){

    return(
      <div className="panel panel-default">
      		<div className="panel-heading">
      			<h3 className="panel-title text-center">Results</h3>
      		</div>
      			<div className="panel-body text-center">
      				<h1>Weather:</h1>
              <ul className="list-unstyled">
                  <li>{this.props.name}</li>
                  <li>{this.props.temp}</li>
                  <li>{this.props.high}</li>
                  <li>{this.props.low}</li>
              </ul>
      			</div>
      </div>
    )
  }
})

module.exports = Results
