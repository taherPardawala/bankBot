let axios = require("axios");
const config = require('../../env')

module.exports = function(db){
    getUserName = function(id,callback){
        axios.get("https://graph.facebook.com/v2.12/"+id+"?access_token="+config.ACCESS_TOKEN)
        .then((response)=>{
            callback(null,response.data);
        })
        .catch((err)=>{
            callback(err,null);
        })
    }
};