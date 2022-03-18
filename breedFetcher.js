const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(url, (error, response, body) => {
    if (error) {
      return callback(`error - page not found`, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback('Input beed not found.', null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = { fetchBreedDescription };