const request = require('request');

let api_key = 'eb593744434a8f32cc3f870e1d720b3a';
let city = 'portland';
let url =  `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`;

request(url, function(err, response, body) {
    if (err) {
        console.log("err: ", err);
    }
    else {
        let weather = JSON.parse(body);
        let msg = `It's ${weather.list[0].main.temp} degrees in ${weather.city.name}`;
        console.log(msg);
    }
});