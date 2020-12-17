'use strict'

const express = require('express');

const router = require('./routes/login.routes.js')
const configuration = require('./configuration/develop.json');

const app = express();
const port = configuration.server.port;

app.use(router);

app.listen(port, () => {
    console.log(`${port} express escuchando`);
});

