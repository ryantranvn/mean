var express = require('express');
var path = require('path');
var router = express.Router();

var config = require(path.join(__dirname, './../../config', 'config'));
var env = config.getEnv();
var portSite = config.portSite();


// home
	router.get('/', function(req, res, next) {
		res.sendFile(path.join(__dirname, '../site', 'index.html'));
	});




module.exports = router;