module.exports = {
    getCareers: async (id) => {
        try {
            let result = await db.bank.findOne({id:id ,accountType:1}, { _id:0,careers:1});
            if (result) {
                return ({ ok: true, careers: result.careers });
            }
            else {
                return ({ ok: false, message: "Bank doesnt exist" });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    createCareer: async (id,data) => {
        try{
            let result = await db.bank.update({id:id ,accountType:1},{$push:{careers:data}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Career added"});
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    deleteCareer: async (id,careerId) => {
        try{
            let result = await db.bank.update({id:id ,accountType:1},{$pull:{careers:{careerId:careerId}}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Career deleted"});
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    getAppointments: async (id) => {
        try {
            let result = await db.bank.findOne({id:id ,accountType:1}, { _id:0,appointments:1});
            if (result) {
                return ({ ok: true, appointments: result.appointments });
            }
            else {
                return ({ ok: false, message: "Bank doesnt exist" });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    createAppointment: async(id,data) => {
        try{
            let result = await db.bank.update({id:id ,accountType:1},{$push:{appointments:data}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Appointment added"});
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    deleteAppointment: async (id,userId) => {
        try{
            let result = await db.bank.update({id:id ,accountType:1},{$pull:{appointments:{user:userId}}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Career deleted"});
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    getSavingsApplications: async (id) => {
        try {
            let result = await db.bank.aggregate([{$unwind:"$accountApplications"},{$match:{$and:[{id:id},{accountType:1},{"$accountApplications.status":"pending"}]}},{$group:{_id:null,"result":{$push:"$accountApplications"}}}]).toArray();
            if (result) {
                return ({ ok: true, accountApplications: result });
            }
            else {
                return ({ ok: false, message: "Bank doesnt exist" });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    updateApplicationStatus: async (id,refNo,update) => {
        try{
            let result = await db.bank.update({id:id ,accountType:1,accountApplications:{"$elemMatch":{"refNo":refNo}}},{$set:{"accountApplications.$":update}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Career deleted"});
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    deleteSavingsApplications: async (id,refNo) => {
        try{
            let result = await db.bank.update({id:id ,accountType:1},{$pull:{accountApplications:{refNo:refNo}}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Career deleted"});
            } else{
                return ({ ok: false, message: 'request failed' });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    getAllCareers: async () => {
        try{
            let result = await db.bank.aggregate([{$group:{_id:"$id","result":{$push:"$careers"}}}]).toArray();
            if (result[0] != undefined) {
                return ({ok:true, careers:result[0]});
            }
            else {
                return ({ok:false,message:"something went wrong"});
            } 
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    }
}
    