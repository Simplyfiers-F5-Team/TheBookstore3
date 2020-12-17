const express = require('express');
const configuration = require('./configuration/develop.json');

const app = express();
const port = configuration.server.port;

app.listen(port, () => {
    console.log(`${port} express escuchando`);
});

