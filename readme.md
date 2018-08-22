# Demo API call to open data host using nodejs
- Main purpose is to demostrate Rest API call to api.data.gov.sg

## Requirements & Assumption
- Developed using Windows 10
- Nodejs version v8.11.4 and npm version 5.6.0 are used
- Internet connectivity is required to install node packages and to call data.gov.sg api.
- data api host (https://api.data.gov.sg/v1/environment/pm25) must be up when running the programm.

## How to run  
- On Windows, Open 'command prompt' using administrator right.
- Run this command below:
```console
npm install && npm start
```

## Expected output sample
```
The program will display previous 3 hours PM 2.5 reading
-------------
timestamp : 2018-08-22T11:00:00+08:00
update_timestamp : 2018-08-22T11:03:53+08:00
west : 8
east : 41
central : 14
south : 15
north : 6
-------------
-------------
timestamp : 2018-08-22T12:00:00+08:00
update_timestamp : 2018-08-22T12:03:52+08:00
west : 14
east : 25
central : 11
south : 10
north : 11
-------------
-------------
timestamp : 2018-08-22T10:00:00+08:00
update_timestamp : 2018-08-22T10:03:52+08:00
west : 7
east : 28
central : 16
south : 16
north : 19
-------------
```

## Dependencies
- Request for making http requests
- momentjs for formatting date
