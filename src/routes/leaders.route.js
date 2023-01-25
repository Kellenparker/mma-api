const express = require("express");
const router = express.Router({ mergeParams: true });

const dataController = require("../controllers/data.controller");

router.route("/").get(dataController.getAll);

router.route("/category=:_category&amt=:_amt&ascending=:_dir").get(dataController.getTop);

module.exports = router;