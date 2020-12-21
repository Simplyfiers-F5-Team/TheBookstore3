'use strict'

const express = require('express');
const exphbs  = require('express-handlebars');

const router = require('./routes/login.routes.js')
const configuration = require('./configuration/develop.json');

const app = express();
const port = configuration.server.port;

app.use(router);

app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.listen(port, () => {
    console.log(`${port} express escuchando`);
});



 
