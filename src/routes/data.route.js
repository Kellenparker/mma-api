const express = require("express");
const router = express.Router({ mergeParams: true });

const dataController = require("../controllers/data.controller");

router.route("/").get(dataController.getAll);

router.route("/:_id").get(dataController.get);

module.exports = router;
