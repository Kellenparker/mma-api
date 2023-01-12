const dataService = require('../services/data.service');

const getName = async function(req, res){
    res.send(await dataService.getName(req.params._name))
}

const getAll = async function(req, res){
    res.send(await dataService.getAll())
}

module.exports = {
    getName,
    getAll
};