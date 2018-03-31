const string = require('../constants/strings');

module.exports = function(controller ,bot){
    controller.on('facebook_postback', function (bot, message) {
        var payload = {};
        try {
          payload = JSON.parse(message.payload);
        } catch (err) {
          payload.text = "undefined payload";
        }
        if (payload.text === string.getStarted) {
            getUserName(message.user,function(err,response){
                bot.reply(message,"Hey there "+response.first_name+"!",function(err){
                    bot.reply(message,"Just type in to locate atms or banks near you!");
                });
            })
        }
    });
}
