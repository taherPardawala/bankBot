const string = require('../constants/strings');

module.exports = function(controller ,bot){
    controller.on('facebook_postback', function (bot, message) {
        console.log("***********POSTBACK",message);
        var payload = {};
        try {
          payload = JSON.parse(message.payload);
        } catch (err) {
          payload.text = "undefined payload";
        }
        if (payload.text === string.getStarted) {
            bot.replyWithTyping(message,"Type in 'hi'");
        }
    });
}
