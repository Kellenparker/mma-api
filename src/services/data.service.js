const data = require('../testdata');

const get = function(_id){
    return getAll().find(boxer => boxer.id == _id);
}

const getAll = function(){
    return data.Boxers;
}

module.exports = {
    get,
    getAll
};
