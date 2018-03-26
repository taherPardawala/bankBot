
        module.exports = {
            // this is the policy file define all policies here and call them in the controllers as needed
            myMiddleWare: async (req, res, next) => {
                if (req.headers.hasOwnProperty('auth') && typeof req.headers.auth == 'string') {
                    let verification = await Services.auth.verifyToken(req.headers.auth);
                    if (!!verification) {
                        req.auth = verification;
                        next();
                    } else {
                        res.status = 401;
                        res.json({ ok: false, message: "Invalid Token" });
                    }
                } else {
                    res.json({ ok: false, message: "Missing params" });
                }
            },
        }
    