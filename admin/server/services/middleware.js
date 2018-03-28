module.exports = {
    // this is the policy file define all policies here and call them in the controllers as needed
    isLoggedIn: async (req, res, next) => {
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
    isUser: async (req, res, next) => {
        if (req.auth.hasOwnProperty('accountType') && req.auth.accountType == 10) {
            next();
        } else {
            res.json({ ok: false, message: "You are not a User." });
        }
    },
    isBank: async (req, res, next) => {
        if (req.auth.hasOwnProperty('accountType') && req.auth.accountType == 1) {
            next();
        } else {
            res.json({ ok: false, message: "You are not an 'BANK' dont try to be one!" });
        }
    }
}
    