const request = require('request');
const string = require('../constants/strings');
module.exports = function(controller, bot){
    getNearBy = function(message, convo, bankName, template, type){
        convo.ask(template,function(response,convo){
            convo.stop();
            bot.reply(message,"Please let me process your request....",function(err){
                let user = response;
                request({
                    url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${user.attachments[0].payload.coordinates.lat},${user.attachments[0].payload.coordinates.long}&radius=500&type=${type}&keyword=${encodeURIComponent(bankName)}&key=AIzaSyDP1nlrB4Eq_p4AnpaDLfxoe2AMtjhrVXk`,
                    json: true
                }, (err, response, body) => {
                        if(err) console.error(err);
                        if(body.results.length == 0) bot.reply(message,"Sorry no "+type+"s were found near your location");
                        else {
                            let template = string.locationsCarousel;
                            template.payload.elements = [];
                            for(i of body.results.slice(0,9)){
                                template.payload.elements.push({
                                    "title": i.name,
                                    "subtitle": i.vicinity,
                                    "image_url": `https://maps.googleapis.com/maps/api/staticmap?size=764x400&center=${i.geometry.location.lat},${i.geometry.location.lng}&zoom=25&markers=${i.geometry.location.lat},${i.geometry.location.lng}`,
                                    "item_url": `https://www.google.com/maps/place/?q=place_id:${i.place_id}`
                                  })
                            }
                            bot.reply(message,{attachment:template});
                        }
                        
                });
            }) 
        });
    }
}