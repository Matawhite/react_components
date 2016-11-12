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
      results: ""
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
      console.log('Updated!')
      helpers.runQuery(this.state.searchTerm)
        .then(function(data){
          if(data != this.state.results)
          {
            this.setState({
              results: data
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
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">Enter a Landmark to search for its exact address, (i.e. "The White House")</p>
          </div>
          <div className="col-md-6">
            <Form setTerm={this.setTerm}/>
          </div>
          <div className="col-md-6">
            <Results address={this.state.results}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Main
