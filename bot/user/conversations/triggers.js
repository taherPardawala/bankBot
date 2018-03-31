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
                                bot.reply(message, "Got your mobile number :)", function (err) {
                                    if (err) console.error(err);
                                    convo.ask(string.askConfirmAppointment, function (response, convo) {
                                        if (response.text == "Yes" || response.text == "yes" || response.text == "yup") {
                                            bot.reply(message, "Processing your Appointment Request please wait....", function (err) {
                                                if (err) console.error(err)
                                                axios.post('https://bankbot.tk' + '/appointment/v0.1/createAppointment', { data: payload })
                                                    .then(function (response) {
                                                        console.log(response);
                                                        bot.reply(message,response.data.message);
                                                        convo.stop();
                                                    })
                                                    .catch(function (error) {
                                                        console.error(error);
                                                    });
                                            })

                                        } else {
                                            bot.reply(message, "Your appointment request has been canceled.")
                                            convo.stop();
                                            
                                        }
                                    })
                                    convo.next();
                                })
                                convo.next();
                            }
                        },
                        {
                            pattern: /\bcancel|stop|reset|no\b/i,
                            callback: function (response, convo) {
                                bot.reply(message, "Your appointment request has been canceled.");
                                convo.stop();
                            }
                        },
                        {
                            pattern: /^[a-z ]+/i,
                            callback: function (response, convo) {
                                bot.reply(message, "Please enter a valid mobile number or say \"no\" or \"cancel\" to cancel appointment request.");
                                convo.repeat();
                                convo.next();
                            }
                        },
                        {
                            default: true,
                            callback: function (response, convo) {
                                bot.reply(message, "Cancelling your appointment request.");
                                convo.stop();
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