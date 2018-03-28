module.exports.routes = {
    'POST /user/login': async (req, res) => {
        if (req.body && req.body.user && req.body.user.hasOwnProperty('id') && req.body.user.hasOwnProperty('password')) {
            req.body.user.password = await Services.auth.hashPassword(req.body.user.password);
            let result = await Services.auth.checkUserExists(req.body.user);
            if (result.ok) {
                let token = await Services.auth.issueToken({ id: result.user.id, accountType: result.user.accountType });
                res.json({ ok: true, token: token, accountType: result.user.accountType });
            } else {
                res.json(result);
            }
        } else {
            res.json({ ok: false, message: "Missing Params" });
        }
    },
    'POST /createUser': async (req, res) => {
        if (req.body && req.body.user && req.body.user.hasOwnProperty('id') && req.body.user.hasOwnProperty('password')) {
            const pwHash = Services.auth.hashPassword(req.body.user.password);
            req.body.user.password = pwHash;
            req.body.user.accountType = 10;
            req.body.user.id = req.body.user.id.toLowerCase();
            res.json(await Services.auth.registerUser(req.body.user));
        } else {
            res.json({ ok: false, message: 'missing params id || pw || name' });
        }
    },
    'POST /createBank': async (req, res) => { //external API to tieup with bank
        if (req.body && req.body.user && req.body.user.hasOwnProperty('id') && req.body.user.hasOwnProperty('password')) {
            const pwHash = Services.auth.hashPassword(req.body.user.password);
            req.body.user.password = pwHash;
            req.body.user.accountType = 1;
            req.body.user.id = req.body.user.id.toLowerCase();
            res.json(await Services.auth.registerUser(req.body.user));
        } else {
            res.json({ ok: false, message: 'missing params id || pw || name' });
        }
    }
}
