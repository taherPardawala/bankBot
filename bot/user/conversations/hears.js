const string = require('../constants/strings');
const steps = require('../constants/stringsSteps');
const documents = require('../constants/stringDocuments');
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
                let responseText = "I am "+"BankBot"+"..... "+resp.result.fulfillment.speech+" "+response.first_name+".";
                bot.replyWithTyping(message, responseText);
            }
        });
    }).action('input.unknown', function (message, resp, bot) {
        bot.replyWithTyping(message, "Sorry, I don't understand");
    }).action('bankLocator', function(message,resp,bot){
        let template = string.askLocationAttachment;
        template.text = null;
        template.text = "Please share your location.";
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
        template.text = "Please share your location.";
        bot.startConversation(message, function (err, convo) {
            if (!err) {
                getNearBy(message, convo, resp.result.parameters.bankName, template, "atm");
                convo.next();
            } else {
                console.error(err);
            }
        });
    }).action('appointment',function(message,resp,bot){
        if(resp.result.parameters.date == "" || resp.result.parameters.bankName == "") bot.replyWithTyping(message,resp.result.fulfillment.speech);
        else {
            getUserName(message.user,function(err,response){
                if(err) console.log(err)
                else{
                    controller.trigger(string.getMobileNumber,[bot,message,{userName:response.first_name+" "+response.last_name,date:resp.result.parameters.date,bankName:resp.result.parameters.bankName}]);
                }
            });
        }
    }).action('carInsurance',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Car Insurance online please visit https://bankbot.tk/app/carinsurance");
    }).action('carLoan',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Car Loan online please visit https://bankbot.tk/app/carloan");
    }).action('createAccount',function(message,resp,bot){
        bot.replyWithTyping(message,"For Creating an Account online please visit https://bankbot.tk/app/createaccount");
    }).action('creditCard',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Credit Card online please visit https://bankbot.tk/app/creditcard");
    }).action('healthInsurance',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Health Insurance online please visit https://bankbot.tk/app/healthinsurance");
    }).action('homeLoan',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Home Loan online please visit https://bankbot.tk/app/homeloan");
    }).action('lifeInsurance',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Life Insurance online please visit https://bankbot.tk/app/lifeinsurance");
    }).action('personalLoan',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Personal Loan online please visit https://bankbot.tk/app/personalloan");
    }).action('twoWheelerInsurance',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Two Wheeler Insurance online please visit https://bankbot.tk/app/twowheelerinsurance");
    }).action('usedCarLoan',function(message,resp,bot){
        bot.replyWithTyping(message,"For comparing and buying Used Car Loan online please visit https://bankbot.tk/app/usedcarloan");
    }).action('stepsForProcess',function(message,resp,bot){
        if(resp.result.parameters.serviceType == "") bot.replyWithTyping(message,resp.result.fulfillment.speech+" To know more go to the FAQ page of our website");
        else {
            bot.replyWithTyping(message,steps[resp.result.parameters.serviceType]);
        }
    }).action('documentsForProcess',function(message,resp,bot){
        if(resp.result.parameters.serviceType == "") bot.replyWithTyping(message,resp.result.fulfillment.speech+" To know more go to the FAQ page of our website");
        else {
            bot.replyWithTyping(message,documents[resp.result.parameters.serviceType]);
        }
    })

}