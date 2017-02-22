var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

var routeApiSite = require(path.join(__dirname, 'app/site/route'));

// environment
	var config = require('./config/config');

	var env = config.getEnv();
	var jsonEnv = config.getEnvPara();

	var db = jsonEnv.db
	var host = jsonEnv.host;

	var portSite = config.portSite();
	var portServer = config.portServer();
	
	global.rootSite = 'http://' + host + ':' + portSite;
	global.rootServer = 'http://' + host + ':' + portServer;

// create app
	var site = express();
	var server = express();

// bodyParser
	site.use(bodyParser.json());       // to support JSON-encoded bodies
	site.use(bodyParser.urlencoded({ extended: true }));  // to support URL-encoded bodies	

	server.use(bodyParser.json());       // to support JSON-encoded bodies
	server.use(bodyParser.urlencoded({ extended: true }));  // to support URL-encoded bodies	

// set static
	site.use('/pubs', express.static(path.join(__dirname, 'publics')));
	site.use('/app', express.static(path.join(__dirname, 'app')));

// route
	// site.use('/', routeApiSite);

	site.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'app/site', 'index.html'));
    });
	

// apps start
	site.listen(portSite, host, function() {
		console.log('Started site app on port ' + portSite);
	});
	server.listen(portServer, host, function() {
		console.log('Started server app on port ' + portServer);
	});
