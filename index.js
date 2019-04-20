var http = require("http");
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var Mongo = require('connect-mongo')(session);

var app = express();
app.locals.pretty = true;
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(require('stylus').middleware({
    src: __dirname + '/public'
}));
app.use(express.static(__dirname + '/public'));

process.env.DB_HOST = process.env.DB_HOST || 'localhost'
process.env.DB_PORT = process.env.DB_PORT || 27017;
process.env.DB_NAME = process.env.DB_NAME || 'myspotify';

process.env.DB_URL = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT;

app.use(session({
    secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
    proxy: true,
    resave: true,
    saveUninitialized: true,
    store: new Mongo({
        url: process.env.DB_URL
    })
}));

require('./routes.js')(app, querystring);

http.createServer(app).listen(app.get('port'), function() {
    console.log('[MySpotify] Listening on Port ' + app.get('port'));
});