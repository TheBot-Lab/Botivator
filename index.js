'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Quote = require('./Quote.model');
const request = require('request');
const composeQuoteData = require('./composeQuoteData');
const composeHelpData = require('./composeHelpData');
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB}`;
const options = {
	server: {
		socketOptions: {
			socketTimeoutMS: 0,
			connectionTimeout: 0
		}
	}
};
mongoose.connect(uri, options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected successfully to mlab database');
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
const port = 3000;

app.post('/', function (req, res) {
	let text = req.body.text;
	//determine type of motivation invoked with botivator command
	if (text === 'quote') {
		Quote.findOneRandom((err, quote) => {
			if (!err) {
				console.log(quote);
				res.json(composeQuoteData(quote));
			}
		});
	}
	else if (text === 'video') {
		res.send('Video motivation coming soon');
	} else {
		// when /botivator command is invoked with 'help', null or an invalid sub command
		res.json(composeHelpData());
	}

});

app.get('/auth/slack', function (req,res) {
	if (!req.query.code) {
		res.redirect('http://github.com');
		return;
	}
	const data = {form: {
			client_id: process.env.SLACK_CLIENT_ID,
			client_secret: process.env.SLACK_CLIENT_SECRET,
			code: req.query.code
		}
	}
	request.post('https://slack.com/api/oauth.access', data, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			//Get authentication token
			let token = JSON.parse(body).access_token;

			//Get the Slack team domain so that the user can be redirected after authentication
			request.post('https://slack.com/api/team.info', {form: {token: token}}, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					if (JSON.parse(body).error == 'missing_scope') {
						res.send("Botivator has been successfully added to your team");
					} else {
						let team = JSON.parse(body).team.domain;
						res.redirect(`http://${team}.slack.com`);
					}
				}
			});
		}
	});

});

app.listen(port, function () {
	console.log('Botivator listening on port: ' + port);
});
