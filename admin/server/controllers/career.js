module.exports.routes = {
    'GET /allCareers': async (req,res) => {
        if(req.body){
            res.json(await Services.bank.getAllCareers());
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
}