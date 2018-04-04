module.exports = {
    getCareers: async (id) => {
        try {
            let result = await db.bank.findOne({id:id}, { _id:0,careers:1});
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
            let result = await db.bank.update({id:id},{$push:{careers:data}});
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
            let result = await db.bank.update({id:id},{$pull:{careers:{careerId:careerId}}});
            console.log(result)
            if (result.result.ok == 1 && result.result.nModified == 1) {
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
            let result = await db.bank.findOne({id:id}, { _id:0,appointments:1});
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
    createAppointment: async(data) => {
        try{
            let isBank = await db.bank.findOne({name:data.bankName},{_id:0,name:1});
            if(!isBank.hasOwnProperty('name')){
                return ({ ok: false, message: 'This bank is not affiliated with us currently. Please try some other bank.'});
            } else {
                let result = await db.bank.update({name:data.bankName},{$push:{appointments:data}});
                if (result.result.ok == 1 && result.result.n == 1) {
                    return ({ok:true,message:"Appointment request has been registered sucessfully"});
                } else{
                    return ({ ok: false, message: 'Appointment request has failed, Please try again later.'});
                }
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    deleteAppointment: async (id,appointmentid) => {
        try{
            let result = await db.bank.update({id:id},{$pull:{appointments:{appointmentId:Number(appointmentid)}}});
            console.log(result.result.ok,result.result.nModified);
            if (result.result.ok == 1 && result.result.nModified == 1) {
                return ({ok:true,message:"Appointment deleted"});
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
            let result = await db.bank.aggregate([{$unwind:"$accountApplications"},{$match:{id:id,$or:[{'accountApplications.status':'pending'},{'accountApplications.status':'processing'}]}},{$group:{_id:null,"result":{$push:"$accountApplications"}}}]).toArray();
            if (result[0] != undefined) {
                return ({ ok: true, accountApplications: result[0].result });
            }
            else {
                return ({ ok: true, accountApplications: [] });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    updateApplicationStatus: async (id,refNo,update) => {
        try{
            let result = await db.bank.update({id:id ,accountApplications:{"$elemMatch":{"refNo":refNo}}},{$set:{"accountApplications.$.status":update.status}});
            if (result.result.ok == 1 && result.result.n == 1) {
                return ({ok:true,message:"Status Updated"});
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
            let result = await db.bank.aggregate([{$unwind:'$careers'},{$group:{_id:"$name","result":{$push:"$careers"}}}]).toArray();
            if (result[0] != undefined) {
                return ({ok:true, careers:result});
            }
            else {
                return ({ok:true,careers:[]});
            } 
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    getBankNames: async () => {
        try{
            return(await db.auth.find({accountType:1},{_id:0, name:1}).toArray());
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
    getRefStatus: async (refNo) => {
        console.log(refNo);
        try{
            let result = await db.bank.aggregate([{$unwind:'$accountApplications'},{$match:{'accountApplications.refNo':refNo}},{$group:{_id:null,status:{$push:'$accountApplications.status'}}}]).toArray()
            if(result[0] != undefined){
                return ({ok:true,status:result[0].status[0]});
            } else {
                return ({ok:true,status:""});
            }
            
        }catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    }
}
    