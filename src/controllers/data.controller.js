const dataService = require('../services/data.service');

const get = function(req, res){
    res.send(dataService.get(req.params._id))
}

const getAll = function(req, res){
    res.send(dataService.getAll())
}

module.exports = {
    get,
    getAll
};