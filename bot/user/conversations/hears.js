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
        if(resp.result.fulfillment.speech == 'Which bank are you looking for?') bot.replyWithTyping(message,resp.result.fulfillment.speech);
        else if(resp.result.parameters.bankName != ''){
            let template = string.askLocationAttachment;
            template.text = resp.result.fulfillment.speech;
            //template.quick_replies[0].payload = '{"text":"locate_bank"}'
            console.log(template);
            bot.reply(message,{attachment:JSON.stringify(template)})
        }
    })

}