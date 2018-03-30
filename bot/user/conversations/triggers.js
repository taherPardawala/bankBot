const string = require('../constants/strings');
const axios = require('axios');
module.exports = function (controller, bot) {
    controller.on(string.getMobileNumber, function (bot, message, payload) {
        bot.startConversation(message, function (err, convo) {
            if (!err) {
                convo.ask("Please share your mobile number with me.",
                    [
                        {
                            pattern: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
                            callback: function (response, convo) {
                                payload.contact = response.text;
                                payload.user = message.user;
                                payload.channel = message.channel;
                                bot.replyWithTyping(message, "Got your mobile number :)", function (err) {
                                    if (err) console.error(err);
                                    convo.ask(string.askConfirmAppointment, function (response, convo) {
                                        if (response.text == "Yes" || response.text == "yes" || response.text == "yup") {
                                            bot.replyWithTyping(message, "Processing your Appointment Request please wait....", function (err) {
                                                if (err) console.error(err)
                                                axios.post('https://bankbot.tk' + '/appointment/v0.1/createAppointment', { data: payload })
                                                    .then(function (response) {
                                                        console.log(response);
                                                        bot.replyWithTyping(message,response.data.message);
                                                    })
                                                    .catch(function (error) {
                                                        console.error(error);
                                                    });
                                            })

                                        } else {
                                            bot.replyWithTyping(message, "Your appointment request has been canceled.")
                                        }
                                    })
                                })
                                convo.next();
                            }
                        },
                        {
                            pattern: /\bcancel|stop|reset|no\b/i,
                            callback: function (response, convo) {
                                bot.replyWithTyping(message, "Your appointment request has been canceled.");
                                convo.repeat();
                                convo.next();
                            }
                        },
                        {
                            pattern: /^[a-z ]+/i,
                            callback: function (response, convo) {
                                bot.replyWithTyping(message, "Please enter a valid mobile number or say \"no\" or \"cancel\" to cancel appointment request.");
                                convo.repeat();
                                convo.next();
                            }
                        },
                        {
                            default: true,
                            callback: function (response, convo) {
                                bot.replyWithTyping(message, "Cancelling your appointment request.");
                                convo.next();
                            }
                        }
                    ]
                );
                convo.next();
            } else {
                console.error(err);
            }
        });
    });
}