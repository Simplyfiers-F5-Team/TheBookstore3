'use strict'

const express = require('express');
const exphbs  = require('express-handlebars');
const mongoose = require ('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');

const configuration = require('./configuration/develop.json');

//conectamos la DB a esa dirección
mongoose.connect("mongodb://localhost:27017/TheBookstore", {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//especificamos el mensaje que queremos que salga cuando se conecte
mongoose.connection.on("open", () => {
    console.log(`mongoDB conectado`);
});

const app = express();
const port = configuration.server.port;

//le decimos a express q a parte de usar las rutas, le vamos a dar json y datos en la url
//express.json y urlencoded tiene que ir antes de las rutas
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(require('./routes/login.routes'));
app.use(require('./routes/book.routes'));
app.use(morgan('dev'));

app.engine('hbs', exphbs({
    defaultLayout: 'mainLayout',
    partialsDir: __dirname + '/views/partials/',
    layoutsDir: __dirname + '/views/layouts/',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`${port} express escuchando`);
});




 
