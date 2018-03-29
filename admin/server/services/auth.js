let jwt = require('jsonwebtoken'); 
module.exports = {
    generateUUID: () => {
        var d = new Date().getTime();
        var uuid = 'xxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function(c)
        {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
    
        return uuid;
    },
    issueToken: claim => {
        return jwt.sign(claim, config.auth.secret, { expiresIn: config.auth.tokenLifeInSec });
    },
    verifyToken: async token => new Promise((resolve, reject) => {
        jwt.verify(token, config.auth.secret, (err, decoded) => {
            if (err) { resolve(false) }
            else { resolve(decoded) }
        })
    }),
    hashPassword: password => {
        const crypto = require('crypto');
        const secret = 'kjbs76576cdkjhsbdjbsd8732y8gfe387g2ofg27fg27o4lyg';
        const hash = crypto.createHmac('sha256', secret)
            .update(password)
            .digest('hex');
        return hash;
    },
    checkUserExists: async (user) => {
        try {
            let result = await db.auth.findOne(user, { id:1,accountType:1,_id:0 });
            if (result) {
                return ({ ok: true, user: result });
            }
            else {
                return ({ ok: false, message: "No such user exists" });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    registerUser: async user => {
        try {
            if(user.accountType == '1'){
                let result = await db.auth.insert(user);
                delete user.password;
                delete user.accountType;
                user.appointments = [];
                user.careers = [];
                user.accountApplications = [];
                let result1 = await db.bank.insert(user);
                if(result.result.ok==1 && result.result.n==1 && result1.result.ok==1 && result1.result.n==1){
                    return {ok:true, message:'bank account created'}
                }else{
                    return {ok:false, message:'could not create account'}
                }
            } else {
                user.referenceNumbers = [];
                let result = await db.auth.insert(user);
                if(result.result.ok==1 && result.result.n==1){
                    return {ok:true, message:'user account created'}
                }else{
                    return {ok:false, message:'could not create account'}
                }
            }
            
        } catch (err) {
            if (err.code && err.code == 11000) {
                return { ok: false, message: 'user already present' };
            } else {
                console.log('Mongo issue ', err.code);
                return { ok: false, message: 'unknown db issue' };
            }
        }
    }
}
    