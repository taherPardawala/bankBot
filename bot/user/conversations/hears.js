const string = require('../constants/strings');
const apiaibotkit = require('api-ai-botkit');
const config = require('../../env');
//const apiai = apiaibotkit(config.dialogFlowApiKey); //put api ket and start using
const axios = require('axios');

module.exports = function(controller, bot){
    controller.hears('.*', 'message_received', function (bot, message) {
        if (message.type !== 'facebook_postback') {
            getUserName(message.user,function(err,name){
                bot.replyWithTyping(message,'Hey there '+name.first_name+" !!");
            })
        }
    });
}