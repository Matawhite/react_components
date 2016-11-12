const axios = require('axios');

const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

const helpers = {
  runQuery: function(location){
    console.log(location);
    let queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&.pretty=1&key=" + geocodeAPI;
    return axios.get(queryURL)
    .then(function(response){
      console.log(response.data.results[0].formatted);
      return response.data.results[0].formatted;
    })
  }
}

module.exports = helpers
