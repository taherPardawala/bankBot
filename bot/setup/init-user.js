// required botkit for the messenger api

const botKit = require('botkit');
const string = require('../user/constants/strings');
const config = require('../env');
// required to access the env file
var fs = require('fs'),
express = require('express'),
request = require('request'),
bodyParser = require('body-parser'),
app = express();

var api_host = 'graph.facebook.com';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var api_host = 'graph.facebook.com';

//Initializing bot controller. with the page following params
const controller = botKit.facebookbot({
    debug: true, // make false to stop debug mode
    receive_via_postback: true, // permission to setup postback
    access_token: config.ACCESS_TOKEN, // page id
    verify_token: config.VERIFY_TOKEN  // verification key that was set on the dev page
});

//Bot spawned.
const bot = controller.spawn({});

app.listen(config.PORT,()=>{
    console.log("listening on port: "+config.PORT);
});

request.post('https://' + api_host + '/me/subscribed_apps?access_token=' + config.ACCESS_TOKEN,
function(err, res, body) {
    if (err) {
        console.log('Could not subscribe to page messages');
    } else {
        console.log('******USER Successfully subscribed to Facebook events:', body);
        controller.startTicking();
    }
});

//Webserver created and bot loaded.
controller.createWebhookEndpoints(app, bot, function () {
    console.log('This user bot is online!!!');
});

//profile settings.
controller.api.messenger_profile.greeting('Hello There im a BankBot');
controller.api.messenger_profile.get_started(string.getStartedSetup); //get started button
controller.api.messenger_profile.menu(string.persistentMenu); // persistent menu setup
//exporting controller and bot.
module.exports = {
    controller,
    bot
};