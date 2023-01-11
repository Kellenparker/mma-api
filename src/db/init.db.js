const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://kellenparker:qfGYr9Rg1It2kElY@mma-stats.blcq8ae.mongodb.net/?retryWrites=true&w=majority";
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

const query = async () => {
    connectDatabase();
    try {
        const database = client.db("mma");
        const fighters = database.collection("fighters");
        const query = { ni: "" };
        const cursor = fighters.find(query);
        return new Promise(function(resolve, object) {
            resolve(cursor.toArray());
        });
    } finally {
    }
};

module.exports = { connectDatabase, query };
