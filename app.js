var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.use(session({
    secret: 'ratemateassignment',
    cookie: {
        maxAge: 60000
    },
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];

    return next();
});



require('./routes/admin')(app);
require('./routes/guest')(app);
require('./routes/movies')(app);
require('./routes/users')(app);
require('./routes/ratings')(app);
require('./routes/main')(app);


var server = app.listen(3000, function() {
    console.log('runnin');
})