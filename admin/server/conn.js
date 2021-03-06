const config = require('./config');
let db = {};
let mongodb = require('mongodb');
let MongoClient = require('mongodb').MongoClient;
Grid = require('mongodb').GridFSBucket;


db.connect = async () => {
    try {
        let connection = await MongoClient.connect(config.dbURL);
        db.auth = connection.collection('accounts');
        db.bank = connection.collection('banks'); 
        db.grid = new Grid(connection,'fs');
        db.files = connection.collection('fs.files'); 
        //rest of the collections go here
        db.auth.ensureIndex({ "id": 1 }, { unique: true }); //unique id field always so as to avoid multiple same accounts
        delete db.connect;
    } catch (e) {
        console.log(e);
        return;
    }
}

module.exports = db;