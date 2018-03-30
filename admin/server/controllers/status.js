module.exports.routes = {
    'GET /getRefStatus': async(req,res) => {
        if(req.headers.hasOwnProperty('refno')){
            let result = await Services.bank.getRefStatus(req.headers.refno);
            res.json(result);
        } else {
            res.json({ok:false,message:"Missing params"})
        }
        
    }
}