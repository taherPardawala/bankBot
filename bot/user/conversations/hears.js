const string = require('../constants/strings');
const apiaibotkit = require('api-ai-botkit');
const config = require('../../env');
const apiai = apiaibotkit(config.dialogFlowApiKey); 
const axios = require('axios');

module.exports = function(controller, bot){
    controller.hears('.*', 'message_received', function (bot, message) {
        if (message.type === 'user_message') {
            apiai.process(message, bot);
        }
    });

    apiai.all(function (message, resp, bot) {
        console.log(resp.result.action);
        if (resp.result.action.match('smalltalk') && resp.result.action !== 'smalltalk.greetings.hello') {
            let responseText = resp.result.fulfillment.speech;
            bot.replyWithTyping(message, responseText);
        }
    });

    apiai.action('smalltalk.greetings.hello', function (message, resp, bot) {
        getUserName(message.user,function(err,response){
            if(err) console.log(err)
            else{
                let responseText = "I am "+"BankBot"+" "+resp.result.fulfillment.speech+" "+response.first_name;
                bot.replyWithTyping(message, responseText);
            }
        });
    }).action('input.unknown', function (message, resp, bot) {
        bot.replyWithTyping(message, "Sorry, I don't understand");
    }).action('bankLocator', function(message,resp,bot){
        let template = string.askLocationAttachment;
        template.text = null;
        template.text = resp.result.fulfillment.speech;
        bot.startConversation(message, function (err, convo) {
            if (!err) {
                getNearBy(message, convo, resp.result.parameters.bankName, template, "bank");
                convo.next();
            } else {
                console.error(err);
            }
        });
    }).action('atmLocator', function(message,resp,bot){
        let template = string.askLocationAttachment;
        template.text = null;
        template.text = resp.result.fulfillment.speech;
        bot.startConversation(message, function (err, convo) {
            if (!err) {
                getNearBy(message, convo, resp.result.parameters.bankName, template, "atm");
                convo.next();
            } else {
                console.error(err);
            }
        });
    })

}