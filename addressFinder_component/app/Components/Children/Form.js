const React = require('react');

const Form = React.createClass({

  getInitialState: function(){
    return{
      term: ""
    }
  },

  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState)
    console.log(newState)
  },

  handleClick: function(){
    console.log('click');
    console.log(this.state.term)
    this.props.setTerm(this.state.term);
  },

  render: function(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
          <form>
            <div className="form-group">
              <h4><strong>Location</strong></h4>
              <input type="text" className="form-control text-center" id="term" onChange={this.handleChange} required/>
              <br />
              <button type="button" className="btn btn-primary" onClick={this.handleClick}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Form;
