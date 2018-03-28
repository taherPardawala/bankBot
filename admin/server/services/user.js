module.exports = {
    createSavingsAccount: async (id,data) => {
        try {
            data.refNo = await Services.auth.generateUUID();
            let result = await db.bank.update({id:data.bankId ,accountType:1},{$push:{accountApplications:data}});
            if (result.result.ok == 1 && result.result.n == 1) {
                let result1 = await db.auth.update({id:id ,accountType:10},{$push:{referenceNumbers:{refNo:data.refNo,bankId:data.bankId}}});
                if (result1.result.ok == 1 && result1.result.n == 1) {
                    return ({ ok: true, message: 'request success', refNo: data.refNo});
                } else{
                    return ({ ok: false, message: 'request failed' });
                }
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    }
}
    