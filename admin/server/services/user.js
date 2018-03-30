module.exports = {
    createSavingsAccount: async (id,data) => {
        try {
            data.refNo = await Services.auth.generateUUID();
            data.status = 'pending';
            let result = await db.bank.update({name:data.bankName},{$push:{accountApplications:data}});
            if (result.result.ok == 1 && result.result.n == 1) {
                let result1 = await db.auth.update({id:id ,accountType:10},{$push:{referenceNumbers:{refNo:data.refNo,bankName:data.bankName}}});
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
    },
    getName: async(id,type) => {
        try{
            if(type == 10){
                return(await db.auth.findOne({id:id},{_id:0,firstName:1,lastName:1}))
            } else {
                return(await db.auth.findOne({id:id},{_id:0,name:1}))
            }
        } catch (err){
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    }
}
    