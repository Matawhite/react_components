/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/***/ function(module, exports) {

	"use strict";
	
	var TweetBox = React.createClass({
	  displayName: "TweetBox",
	
	  // state setter
	  getInitialState: function getInitialState() {
	    return {
	      text: "",
	      photoAdded: false
	    };
	  },
	  // on text change handler
	  handleChange: function handleChange(event) {
	    this.setState({ text: event.target.value });
	  },
	  //on photo added handler
	  togglePhoto: function togglePhoto(event) {
	    this.setState({ photoAdded: !this.state.photoAdded });
	  },
	  //adjust the characters leftover baseed off if a photo is present or not
	  remainingCharacters: function remainingCharacters() {
	    if (this.state.photoAdded) {
	      return 140 - 23 - this.state.text.length;
	    } else {
	      return 140 - this.state.text.length;
	    }
	  },
	  //if characters in tweet are over 160 return an error
	  overflowAlert: function overflowAlert() {
	    if (this.remainingCharacters() < 0) {
	      if (this.state.photoAdded) {
	        // adjust the substring if a "photo is present"
	        var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
	        var overflowText = this.state.text.substring(140 - 23);
	      } else {
	        var beforeOverflowText = this.state.text.substring(140 - 10, 140);
	        var overflowText = this.state.text.substring(140);
	      }
	
	      return React.createElement(
	        "div",
	        { className: "alert alert-warning" },
	        React.createElement(
	          "strong",
	          null,
	          "Oops! Too Long:"
	        ),
	        "\xA0...",
	        beforeOverflowText,
	        React.createElement(
	          "strong",
	          { className: "bg-danger" },
	          overflowText
	        )
	      );
	    }
	  },
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "well clearfix" },
	      this.overflowAlert(),
	      React.createElement("textarea", { className: "form-control", onChange: this.handleChange }),
	      React.createElement("br", null),
	      React.createElement(
	        "span",
	        null,
	        this.remainingCharacters()
	      ),
	      React.createElement(
	        "button",
	        { className: "btn btn-primary pull-right", disabled: this.remainingCharacters() === 140 },
	        "Tweet"
	      ),
	      React.createElement(
	        "button",
	        { className: "btn btn-primary pull-right", onClick: this.togglePhoto },
	        this.state.photoAdded ? "✓ Photo Added" : "Add Photo"
	      )
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(TweetBox, null), document.getElementById("container"));

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map