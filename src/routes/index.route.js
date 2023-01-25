const express = require("express");

const router = express.Router();

const data = require('./data.route');

router.use('/data', data);

const leaders = require('./leaders.route');

router.use('/top', leaders);

// Root and health routes
router.get("/", (req, res) => res.send("Test test"));
router.get("/health", (req, res) => {
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now(),
    };
    res.send(JSON.stringify(healthcheck));
});

module.exports = router;
