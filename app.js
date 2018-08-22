const request = require('request');
const moment = require('moment');
const url = 'https://api.data.gov.sg/v1/environment/pm25';

var writeKeyValue = function (obj) {
  for (let [key, value] of Object.entries(obj)) {
    if (value !== null && typeof value === 'object') {
      writeKeyValue(value);
      return;
    }
    console.log(`${key} : ${value}`);
  }
}

var callApi = function () {
  console.log('The program will display previous 3 hours PM 2.5 reading');

  for (var i = 0; i < 3; i++) { // loop for previous 3 hours
    var date = new Date();
    date = date.setHours(date.getHours() - i);
    var formmattedDate = moment(date).format("YYYY-MM-DDTHH:mm:ss");

    let params = { 'date_time':formmattedDate};
    request({url:url, qs:params}, function (error, response, body) {
      if (error != null && response.statusCode != 200) {
        console.error(error); // error occurs
        console.log('statusCode:', response.statusCode);
        return;
      }

      let jsonResult = JSON.parse(body);
      let length = jsonResult.items.length;
      console.log('-------------');
      for (var i = 0; i < length; i++) {
        let currentObj = jsonResult.items[i]; 
        writeKeyValue(currentObj);
      }
      console.log('-------------');
    });
  }
}

callApi();