
module.exports = function(controller, bot){
    getNearBy = function(message, convo, bankName, template, type){
        convo.ask(template,function(response,convo){
            console.log(response);
        });
    }
}