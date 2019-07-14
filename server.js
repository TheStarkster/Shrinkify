const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const db = require('./private/keys').MongoUri;
const MongoClient = require('mongodb').MongoClient;
const session = require('express-session');

const app = express();
app.listen(5000);

app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(db,{ useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const client = new MongoClient(db, { useNewUrlParser: true });
client.connect(err => {
    // perform actions on the collection object
    client.close();
  });

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin')
})
//mere Pyaare Headers...
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store');
    next();
});  
app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true
  }));
  app.use((req,res,next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

app.use('/',require('./routes/paths'));