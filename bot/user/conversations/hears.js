const string = require('../constants/strings');
const steps = require('../constants/stringsSteps');
const documents = require('../constants/stringDocuments');
const apiaibotkit = require('api-ai-botkit');
const config = require('../../env');
const fs = require('fs');
let questions = JSON.parse(fs.readFileSync('../constants/questions.json')) //restart to update questions
const fuse = new Fuse(questions, options);
const apiai = apiaibotkit(config.dialogFlowApiKey);
const Fuse = require('fuse.js');
const options = {
    keys: [{
        question: 'title',
        weight: 0.3
    }]
};
const axios = require('axios');

module.exports = function (controller, bot) {
    globalapiai = apiai,

    controller.hears('.*', 'message_received', function (bot, message) {
        if (message.type === 'user_message') {
            apiai.process(message, bot);
        }
    });

    apiai.all(function (message, resp, bot) {
        console.log(message);
        console.log(resp.result.action);
        if (resp.result.action.match('smalltalk') && resp.result.action !== 'smalltalk.greetings.hello') {
            let responseText = resp.result.fulfillment.speech;
            bot.reply(message, responseText);
        }
    });

    apiai.action('smalltalk.greetings.hello', function (message, resp, bot) {
        getUserName(message.user, function (err, response) {
            if (err) console.log(err)
            else {
                let responseText = "I am " + "BankBot" + "..... " + resp.result.fulfillment.speech + " " + response.first_name + ".";
                bot.reply(message, responseText);
                bot.reply(message,{attachment:string.getStartedCarousel});                
            }
        });
    }).action('input.unknown', function (message, resp, bot) {
        bot.reply(message, "Sorry, I don't understand");
    }).action('bankLocator', function (message, resp, bot) {
        bankLocator(message, resp.result.parameters.bankName, bot);
    }).action('atmLocator', function (message, resp, bot) {
        atmLocator(message, resp.result.parameters.bankName, bot);
    }).action('appointment', function (message, resp, bot) {
        console.log(resp);
        if (resp.result.parameters.date == "" || resp.result.parameters.bankName == "") bot.reply(message, resp.result.fulfillment.speech);
        else {
            getUserName(message.user, function (err, response) {
                if (err) console.log(err)
                else {
                    controller.trigger(string.getMobileNumber, [bot, message, { name: response.first_name + " " + response.last_name, date: resp.result.parameters.date, bankName: resp.result.parameters.bankName }]);
                }
            });
        }
    }).action('carInsurance', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Car Insurance online please visit https://bankbot.tk/#/app/carinsurance");
    }).action('carLoan', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Car Loan online please visit https://bankbot.tk/#/app/carloan");
    }).action('createAccount', function (message, resp, bot) {
        bot.reply(message, "For Creating an Account online please visit https://bankbot.tk/#/app/createaccount");
    }).action('creditCard', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Credit Card online please visit https://bankbot.tk/#/app/creditcard");
    }).action('healthInsurance', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Health Insurance online please visit https://bankbot.tk/#/app/healthinsurance");
    }).action('homeLoan', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Home Loan online please visit https://bankbot.tk/#/app/homeloan");
    }).action('lifeInsurance', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Life Insurance online please visit https://bankbot.tk/#/app/lifeinsurance");
    }).action('personalLoan', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Personal Loan online please visit https://bankbot.tk/#/app/personalloan");
    }).action('twoWheelerInsurance', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Two Wheeler Insurance online please visit https://bankbot.tk/#/app/twowheelerinsurance");
    }).action('usedCarLoan', function (message, resp, bot) {
        bot.reply(message, "For comparing and buying Used Car Loan online please visit https://bankbot.tk/#/app/usedcarloan");
    }).action('stepsForProcess', function (message, resp, bot) {
        if (resp.result.parameters.serviceType == "") bot.reply(message, resp.result.fulfillment.speech);
        else {
            bot.reply(message, steps[resp.result.parameters.serviceType] + "\nTo know more go to the FAQ page of our website");
        }
    }).action('documentsForProcess', function (message, resp, bot) {
        if (resp.result.parameters.serviceType == "") bot.reply(message, resp.result.fulfillment.speech);
        else {
            bot.reply(message, documents[resp.result.parameters.serviceType] + "\nTo know more go to the FAQ page of our website");
        }
    }).action('faqs', function (message, resp, bot) {
        if(resp.result.resolvedQuery != ""){
            let results = fuse.search(resp.result.resolvedQuery);
            if(results.length != 0){
                bot.reply(message,results[0].resp)
            } else {
                bot.reply(message,"Didnt get you there try asking a diffrent question.");
            }
        } else {
            bot.reply(message,"Please ask a question first.");
        }
        
    })

    atmLocator = function (message, bankName, bot) {
        let template = string.askLocationAttachment;
        template.text = null;
        template.text = "Please share your location.";
        bot.startConversation(message, function (err, convo) {
            if (!err) {
                getNearBy(message, convo, bankName, template, "atm");
                convo.next();
            } else {
                console.error(err);
            }
        });
    }

    bankLocator = function(message, bankName, bot) {
        let template = string.askLocationAttachment;
        template.text = null;
        template.text = "Please share your location.";
        bot.startConversation(message, function (err, convo) {
            if (!err) {
                getNearBy(message, convo, bankName, template, "bank");
                convo.next();
            } else {
                console.error(err);
            }
        });
    }

}