require('dotenv').config();

const express = require('express');
const cors = require('cors');
const createError = require('http-errors');

// Initialize express and routes
const app = express();
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

// Initialize database
const db = require("./db/init.db")
db.connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 404 handler
app.use((req, res, next) => {
    next(createError(404, 'Not found'));
})

// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
})
