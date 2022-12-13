const express = require("express");

const data = require('./data.route');

const router = express.Router();

router.use('/data', data);

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
