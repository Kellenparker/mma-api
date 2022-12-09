const dotenv = require('dotenv').config();

const express = require('express');
const cors = require('cors');
const createError = require('http-errors');

//setup app & its routes
const app = express();
app.use(cors());
const routes = require('./routes/index.route');
app.use(routes);

app.use((req, res, next) => {
    next(createError(404, 'Not found'));
})

app.use((err, req, res) => {
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
