module.exports.policies= [Services.middleware.isLoggedIn,Services.middleware.isUser];

module.exports.routes = {
    'POST /createSavingsAccount': async (req,res) => {
        if(req.body && req.body.hasOwnProperty('data')){
            res.json(await Services.user.createSavingsAccount(req.auth.id,req.body.data));
        } else {
            res.json({ok:false,message:"Missing params"})
        }
    },
    'GET /bankNames': async (req,res) => {
        res.json(await Services.bank.getBankNames());
    }
}
