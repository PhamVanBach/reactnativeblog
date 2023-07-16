const path = require('path');
const express = require('express');
var morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const port = 3000;
const app = express();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'));
//Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Home, search, contact

//Route init
route(app);

app.listen(port);
