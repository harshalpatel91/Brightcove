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
	console.log("req",req, req.url);
    req.pipe(request(oauthUrl + req.url)).pipe(res);

});


app.listen(port);


