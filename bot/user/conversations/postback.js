const string = require('../constants/strings');

module.exports = function(controller ,bot){
    controller.on('facebook_postback', function (bot, message) {
        var payload = {};
        try {
          payload = JSON.parse(message.payload);
        } catch (err) {
          payload.text = "undefined payload";
        }
        switch(payload.text){
            case string.getStarted:
            getUserName(message.user,function(err,response){
                bot.reply(message,"Hey there "+response.first_name+"!",function(err){
                    bot.reply(message,{attachment:string.getStartedCarousel});
                });
            })
            break;

            case string.show_atms:
            atmLocator(message,"",bot);
            break;

            case string.show_banks:
            bankLocator(message,"",bot);
            break;

            case string.set_appointment:
            message.type = "user_message";
            message.text = "set an appointment";
            globalapiai.process(message,bot);
            break;
        }
    });
}
