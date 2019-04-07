var express = require('express');
var session = require('express-session');
var app = express();

app.use(express.static('static'));
app.use(express.urlencoded());
app.use(session({
    secret: 'justmockinstuff',
    resave: true,
    saveUninitialized: false
  })
);

app.set('view engine', 'ejs');

// Movie database mock
moviedb = [
    {
        id: 1,
        title: 'Titanic',
        description: 'This is a very sad movie starring the young Leonardo',
        rating: 8,
        rating_count: 123
    },
    {
        id: 2,
        title: 'Harry Potter',
        description: "You're a wizzard Harry, and also the unfortunate recipient of a destiny you never asked for, so good luck with that",
        rating: 6,
        rating_count: 444
    },
    {
        id: 3,
        title: 'Rambo',
        description: 'A lot of shooting going on',
        rating: 7,
        rating_count: 321
     },
     {
        id: 4,
        title: 'IT',
        description: 'Scary one',
        rating: 5.5,
        rating_count :12123
      }
];

// Users database mock
// First user gets admin rights
// No password hashing/salting for now
users = [
    {
        id: 0,
        email: 'admin@admin.admin',
        username: 'Admin',
        password: 'admin',
        isAdmin: true
    }
];

//Ratings mock
ratings = [
    {
        id: 0,
        username: 'Harry',
        score: 5,
        comment: 'All time fav'
    },
    {
        id: 1,
        username: 'Dumbledore',
        score: 3,
        comment: 'I can only recommend the first 5 movies'
    },
    {
        id: 2,
        username: 'Dobbu',
        score: 5,
        comment: 'Dobby is free'
    }
];


require('./routes/admin')(app);
require('./routes/guest')(app);
require('./routes/movies')(app);
require('./routes/users')(app);
require('./routes/ratings')(app);
require('./routes/main')(app);


var server = app.listen(3000, function() {
    console.log('runnin');
})