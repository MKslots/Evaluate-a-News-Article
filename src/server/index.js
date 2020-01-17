var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const aylien = require("aylien_textapi");

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('app listening on http://localhost:8081/')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/save', function (req, res) {

    textapi.sentiment({
      url: req.body.text, 
      mode: 'document',
    }, function(error, response) {
      console.log(response)
      res.send(response)
      if (error === null) {
        console.log(response);
      }
    })
});
