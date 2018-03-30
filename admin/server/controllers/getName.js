module.exports.policies= [Services.middleware.isLoggedIn];

module.exports.routes = {
    'GET /userName': async (req,res) => {
        res.json(await Services.user.getName(req.auth.id,req.headers.accounttype));
    }
}