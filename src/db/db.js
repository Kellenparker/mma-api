const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();

const uri = process.env.URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});

const connectDatabase = () => {
    client.connect( (err) => {
        err ? console.log(`error: connectDatabase: ${err}`) : null;
    });
};

const closeDatabase = () => {
    client.close();
}

const nameQuery = async (name) => {
    connectDatabase();
    try {
        const database = client.db("mma");
        const fighters = database.collection("fighters");
        const query = { name: new RegExp(name.replace("_", " "), "i") };
        const cursor = fighters.find(query);
        return new Promise(function(resolve, object) {
            resolve(cursor.toArray());
        });
    } finally {
    }
};

const getTop = async (category, amt, dir) => {
    connectDatabase();
    try {
        const database = client.db("mma");
        const fighters = database.collection("fighters");
        const mysort = {[category]: dir == 'true' ? -1 : 1};
        const cursor = fighters.find({}).sort(mysort).limit(parseInt(amt));
        return new Promise(function(resolve, object) {
            resolve(cursor.toArray());
        });
    } finally {
    }
}

module.exports = { connectDatabase, nameQuery, getTop };
