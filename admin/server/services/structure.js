
module.exports.routes = {
    myFunc: async (id) => {
        try {
            let result = await db.auth.findOne({id:id ,accountType:1}, { _id:0,password:0,accountType:0});
            if (result) {
                return ({ ok: true, profile: result });
            }
            else {
                return ({ ok: false, message: "User doesnt exist" });
            }
        } catch (err) {
            console.log('Mongo issue ', err);
            return ({ ok: false, message: 'unknown db issue' });
        }
    },
}
    