module.exports.policies= [Services.middleware.isLoggedIn,Services.middleware.isBank];

module.exports.routes = {
    'GET /careers': async (req,res) => {
        if(req.auth){
            res.json(await Services.bank.getCareers(req.auth.id));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
    'POST /careers': async (req,res) => {
        if(req.body && req.body.hasOwnProperty('data')){
            res.json(await Services.bank.createCareer(req.auth.id,req.body.data));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
    'DELETE /careers': async (req,res) => {
        if(req.auth && req.headers.hasOwnProperty('careerid')){
            res.json(await Services.bank.deleteCareer(req.auth.id,Number(req.headers.careerid)));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
    'GET /appointments': async (req,res) => {
        if(req.auth){
            res.json(await Services.bank.getAppointments(req.auth.id));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
    'DELETE /appointments': async (req,res) => {
        if(req.auth && req.headers.hasOwnProperty('appointmentid')){
            res.json(await Services.bank.deleteAppointment(req.auth.id,req.headers.appointmentid));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
    'GET /savingsApplications': async (req,res) => {
        if(req.auth){
            res.json(await Services.bank.getSavingsApplications(req.auth.id));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    },
    'POST /savingsApplications': async (req,res) => {
        if(req.body && req.body.hasOwnProperty('update') && req.body.hasOwnProperty('refNo')){
            res.json(await Services.bank.updateApplicationStatus(req.auth.id,req.body.refNo,req.body.update));
        } else {
            res.json({ok:false,message:"missing params"})
        }
    }
}
