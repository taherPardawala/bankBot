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

app.use(require('cors'));
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
controller.createWebhookEndpoints = function(webserver, bot, cb) {

        controller.log(
            '** Serving webhook endpoints for Messenger Platform at: ' +
            'https://' +"bot.bankbot.tk"+ '/facebook/receive');
        webserver.post('/facebook/receive', function(req, res) {
            res.send('ok');
            controller.handleWebhookPayload(req, res, bot);
        });

        webserver.get('/facebook/receive', function(req, res) {
            if (req.query['hub.mode'] == 'subscribe') {
                if (req.query['hub.verify_token'] == configuration.verify_token) {
                    res.send(req.query['hub.challenge']);
                } else {
                    res.send('OK');
                }
            }
        });
        webserver.post('/facebook/sendmessage', function(req, res) {
            if(req.body && req.body.hasOwnProperty('message') && req.body.hasOwnProperty('respString') && req.body.message.hasOwnProperty('user') && req.body.message.hasOwnProperty('channel') && req.body.message.hasOwnProperty('page')){
                bot.reply(req.body.message,req.body.respString,function(err){
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                    res.header('Access-Control-Allow-Methods', 'GET,POST');
                    if(err) res.json({error:err});
                    else res.json({ok:true});
                });
            } else {
                res.json({ok:false,error:"missing params"});
            }
        });

        if (cb) {
            cb();
        }

        return controller;
    };
    
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