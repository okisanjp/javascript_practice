var request = require('request');
var data = {
	"accessKey": "YOUR_ACCESS_KEY",
  "streamName": "test_sparkline",
  "point": [{
      "number": 40,
      "timestamp": Math.floor((new Date)/1000)
  }]
}

request.post({
	uri: 'https://www.leftronic.com/customSend',
  body: data,
  json: true
	},
	function(err, result, body) {
  	console.log(err || body);
	}
);
