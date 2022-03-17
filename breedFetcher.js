const request = require('request');
const args = process.argv.slice(2);
let breed = args[0].substring(0, 4);
let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;

request(url, (error, response, body) => {
  if (error) {
    console.log(`error - page not found`);
  }
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('Input beed not found.');
  }
  console.log(data[0].breeds);
});

