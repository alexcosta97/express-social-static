const express = require('express');
const mongoose = require('mongoose');
const passport = require('./passport');
const bodyParser = require('body-parser');

//Requiring models
const User = require('./models/user');

//connecting to the database
mongoose.connect('mongodb://localhost/chapter01', {useNewUrlParser:true, useCreateIndex: true});



//Configuring express app
const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(require('cookie-parser')('my secret string'));
app.use(require('express-session')({secret: 'my other secret string', resave: true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(3000);
console.log('Express started on port 3000');

module.exports.app = app;
const routes = require('./routes');