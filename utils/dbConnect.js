const { MongoClient } = require('mongodb');
const connectionString = 'mongodb://localhost:27017';
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db('deals');
            console.log('Successfully connected to mongodb');

            return callback();
        })

    },

    getdb: function () {
        return dbConnection;
    },
};