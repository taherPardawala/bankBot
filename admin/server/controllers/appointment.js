module.exports.routes = {
    'POST /createAppointment': async (req,res) => {
        if(req.body && req.body.hasOwnProperty('data')){
            res.json(await Services.bank.createAppointment(req.body.data));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    }
}