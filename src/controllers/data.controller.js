const dataService = require('../services/data.service');

const getName = async function(req, res){
    res.send(await dataService.getName(req.params._name))
}

const getAll = async function(req, res){
    res.send(await dataService.getAll())
}

const getTop = async function(req, res){
    res.send(await dataService.getTop(req.params._category, req.params._amt, req.params._dir))
}

module.exports = {
    getName,
    getAll,
    getTop
};