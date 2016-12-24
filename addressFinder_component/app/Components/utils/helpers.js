const axios = require('axios');

const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
const key = '92aee7d4139da0c0306f02f8742d81fd';

const helpers = {
  runQuery: function(location){
    console.log(location);
    let queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + key;
    return axios.get(queryURL)
    .then(function(response){
      console.log(response.data.weather);
      return response.data.weather[0].id;
    })
    .catch(function(err){
      console.log(err)
    })
  }
}

module.exports = helpers
