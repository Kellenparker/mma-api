const mongo = require("../db/db");

const getName = async function (_name) {
    return new Promise(function(resolve, object) {
        mongo.nameQuery(_name).then(val => resolve(val));
    })
};

const getAll = async function () {
    return new Promise(function(resolve, object) {
        mongo.query().then(val => resolve(val));
    })
};

const getTop = async function (_category, _amt, _dir) {
    return new Promise(function(resolve, object) {
        mongo.getTop(_category, _amt, _dir).then(val => resolve(val));
    })
}

module.exports = {
    getName,
    getAll,
    getTop
};
