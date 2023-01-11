const get = function (_id) {
    const mongo = require("../db/init.db");
    return mongo.query();
};

const getAll = async function () {
    const mongo = require("../db/init.db");
    return new Promise(function(resolve, object) {
        mongo.query().then(val => resolve(val));
    })
};

module.exports = {
    get,
    getAll,
};
