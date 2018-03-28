const controller = require('./setup/init-user').controller;
const bot = require('./setup/init-user').bot;
const config = require('./env')
require('events').EventEmitter.prototype._maxListeners = 100;
var db = require('mongodb').MongoClient

db.connect(config.url, function(err, db) {
    require('./user/database/dbfunctions')(db);
    require('./user/conversations/postback')(controller,bot);// call postback
    require('./user/conversations/hears')(controller,bot);// call hears
    require('./user/conversations/triggers')(controller,bot);// call triggers
    require('./user/conversations/locatorConvo')(controller,bot);
});