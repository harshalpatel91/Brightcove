var express = require('express');
var os = require('os');
var fs = require('fs');
var app = express();
var request = require('request');
var path = require('path');


    var URL = "https://dev-new-api-contentstack.io";

    var port = process.env.PORT || 5000;



    app.use('/', function(req, res) {
        req.pipe(request(URL + req.url)).pipe(res);
    });

    
    app.listen(port);


