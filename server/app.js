var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');
var mongoose=require("mongoose");

var User = require('./model/users');
var bloodBanks =require('./model/bloodBank');


var routes = require('./routes/index');
var users = require('./routes/users');
var bloodbank = require('./routes/bloodbank');
var app = express();

//data base connections...
mongoose.connect('mongodb://localhost:27017/bloodbank',function (error) {
if(error){
  console.log(error);
}
});

var db=mongoose.connection;
db.on('erroe',console.error.bind(console,'connection error....!!!'));
db.once('open',function(){
  console.log("connection sucessful");
});
// database connections code



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//first edit

app.use(require('express-session')({ secret: 'ravi', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash());
app.use(express.static(path.join(__dirname, '../client/dist'))); // services all the static resources like html files, css , etc.

//app.use('/', routes);
app.use('/users', users);
app.use('/bloodbank', bloodbank);


//logout
app.get('/logout',function(req,res,next){
 console.log("Session Deleted");
 req.logout();
 res.send("logged out");
});

//second editing..
app.post('/login',passport.authenticate('local', { failureFlash: 'Error',successFlash:'success' }),
function(req, res) {
  res.json({responseText:'Authorised'});
  console.log("in Login");
});
passport.use(new LocalStrategy(
function(username, password, done) {

  var temp = User.findOne({ 'username': username }, function (err, user) {

    if (err) { return done(err); }

    if (!user) { return done(null, false); }

    if (user.password!==password) { return done(null, false);}

   return done(null, user);

  });

}

));

passport.serializeUser(function(user, done) {

done(null, user.id);

});

passport.deserializeUser(function(id, done) {

User.findById(id, function (err, user) {

  done(err, user);

});

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
