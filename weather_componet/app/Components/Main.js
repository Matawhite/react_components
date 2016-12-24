const React = require('React');
const ReactDom = require('react-dom');
const Form = require('./Children/Form')
const Results = require('./Children/Results')
const helpers = require('./utils/helpers');

const Main = React.createClass({
  //setting state
  getInitialState: function(){
    return{
      searchTerm: "",
      results: "",
      temp: "",
      name: ""

    }
  },
  // updates state with the new search term from the form component
  setTerm: function(term){
    this.setState({
      searchTerm: term
    })
  },

  // if searchTerm updates, it runs the helper.runQuery function which returns
  // the address from the geocodeAPI
  componentDidUpdate: function(prevProps,prevState){
    if(prevState.searchTerm != this.state.searchTerm){
      helpers.runQuery(this.state.searchTerm)
        .then(function(data){
          if(data != this.state.results)
          console.log(data)
          {
            this.setState({
              temp: `${data.main.temp} degrees`,
              name: `The weather today in ${data.name} is: `,
              high: `The high today is ${data.main.temp_max} degrees.`,
              low: `With the low at ${data.main.temp_min} degrees.`
            })
          }
          // when importing another object context of this may change and must
          //bound to component's this and not function in this case
        }.bind(this))
    }
  },

  render: function () {
    return(
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Check The Weather</h2>
            <p className="text-center">Enter a city to search for the weather, (i.e. "Austin, TX")</p>
          </div>
          <div className="col-md-6">
            <Form setTerm={this.setTerm}/>
          </div>
          <div className="col-md-6">
            <Results temp={this.state.temp} name={this.state.name} high={this.state.high} low={this.state.low}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main
