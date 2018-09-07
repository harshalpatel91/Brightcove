var express = require('express');
var os = require('os');
var fs = require('fs');
var app = express();
var request = require('request');
var path = require('path');


var port = process.env.PORT || 5000;


app.use('/brightcove', function(req, res) {
	var brightcoveUrl = "https://cms.api.brightcove.com";
	
    req.pipe(request(brightcoveUrl + req.url)).pipe(res);

});

app.use('/oauth', function(req, res) {
	var oauthUrl = "https://oauth.brightcove.com";
	req.pipe(request(oauthUrl + req.url)).pipe(res);

});

app.use('/watsonplatform', function(req, res) {
	var watsonplatformUrl = "https://gateway-wdc.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-19";
	req.pipe(request(watsonplatformUrl + req.url)).pipe(res);

});


app.listen(port);


