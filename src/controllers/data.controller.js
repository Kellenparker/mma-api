const dataService = require('../services/data.service');

const get = function(req, res){
    res.send(dataService.get(req.params._id))
}

const getAll = async function(req, res){
    res.send(await dataService.getAll())
}

module.exports = {
    get,
    getAll
};