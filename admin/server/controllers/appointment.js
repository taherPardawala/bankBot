module.exports.routes = {
    'POST /createAppointment': async (req,res) => {
        if(req.body && req.body.hasOwnProperty('data') && req.body.hasOwnProperty('id')){
            res.json(await Services.bank.createAppointment(req.id,req.body.data));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    }
}