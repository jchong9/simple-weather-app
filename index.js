const request = require('request');

let api_key = 'eb593744434a8f32cc3f870e1d720b3a';
let city = 'portland';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}'

request(url, function(err, response, body) {
    if (err) {
        console.log("err: ", err);
    }
    else {
        console.log("body: ", body);
    }
});