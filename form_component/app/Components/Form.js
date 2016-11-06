var React = require('react');

var Form = React.createClass({

  /*setting state on load*/
  getInitialState: function(){
    return{
      num1: 0,
      num2: 0,
      text: ""
    }
  },

  /* Everytime the form changes value, the state will get recaluated*/
  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState, function(){
      console.log(newState)
    });
  },

  render: function(){
    return(
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Form Capture</h2>
            <p><em>Type Numbers and text in the appropriate boxes.</em></p>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Form</h3>
                <div className="panel-body text-center">
                  <form>
                    <div className="form-group">

                      <h4><strong>Number 1</strong></h4>
                      <input type="number" value={this.state.value} className="form-control" id="num1" onChange={this.handleChange} required/>

                      <h4><strong>Number 2</strong></h4>
                      <input type="number" value={this.state.value} className="form-control" id="num2" onChange={this.handleChange} required/>

                      <h4><strong>Random Text</strong></h4>
                      <input type="text" value={this.state.value} className="form-control" id="text" onChange={this.handleChange} required/>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Results</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h2>{this.state.num1} + {this.state.num2} = {parseInt(this.state.num1) + parseInt(this.state.num2)}</h2>
                    <h2>Original Text: {this.state.text}
                      <br/>
                      Reversed:{this.state.text.split('').reverse().join("")}</h2>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
})

module.exports = Form
