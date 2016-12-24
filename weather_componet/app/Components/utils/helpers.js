const axios = require('axios');

const key = '92aee7d4139da0c0306f02f8742d81fd';

const helpers = {
  runQuery: function(location){
    let queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + key + '&units=imperial';
    console.log(queryURL)
    return axios.get(queryURL)
    .then(function(response){
      // console.log(response.data.weather);
      return response.data;
    })
    .catch(function(err){
      console.log(err)
    })
  }
}

module.exports = helpers

// helpers.runQuery('Austin,TX')
