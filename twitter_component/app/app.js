const React = require('react');
const ReactDOM = require('react-dom');


var TweetBox = React.createClass({
  // state setter
  getInitialState: function(){
    return{
      text: "",
      photoAdded: false
    }
  },
  // on text change handler
  handleChange: function(event){
    this.setState({text: event.target.value})
  },
  //on photo added handler
  togglePhoto: function(event){
    this.setState({photoAdded: !this.state.photoAdded})
  },
  //adjust the characters leftover baseed off if a photo is present or not
  remainingCharacters: function(){
    if(this.state.photoAdded){
      return 140 - 23 - this.state.text.length;
    }else{
      return 140 - this.state.text.length;
    }
  },
  //if characters in tweet are over 160 return an error
  overflowAlert: function() {
    if (this.remainingCharacters() < 0) {
      if (this.state.photoAdded) {
        // adjust the substring if a "photo is present"
        var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        var overflowText = this.state.text.substring(140 - 23);
      } else {
        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
        var overflowText = this.state.text.substring(140);
      }

      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    }
  },
  render: function() {
    return (
      <div className="well clearfix">
        {this.overflowAlert()}
        {/* listens to the change in the textarea and updates the state */}
        <textarea className="form-control" onChange={this.handleChange}></textarea>
        <br/>
        <span>{this.remainingCharacters()}</span>
        <button className="btn btn-primary pull-right" disabled={this.remainingCharacters() === 140}>Tweet</button>
        {/* listens to the change in the photo button and updates the state */}
        <button className="btn btn-primary pull-right" onClick={this.togglePhoto}>{this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }</button>
      </div>

    )
  }
})

ReactDOM.render(
  <TweetBox />,
  document.getElementById("container")
);
