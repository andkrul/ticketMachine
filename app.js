var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var Nominal ;
app.get("/nominals", function(req, res) {

  Nominal.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
  });
  res.send(nominals);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

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


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
var moneySchema = mongoose.Schema({
  nominal: Number,
  count: Number
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("dziala")


   Nominal = mongoose.model('Money', moneySchema, "mongoose_demo");

//Insert data
  var gr10 = new Nominal({nominal:0.1,count:5});
  gr10.save();
  var gr20 = new Nominal({nominal:0.2,count:7});
  gr20.save();
  var gr50 = new Nominal({nominal:0.5,count:6});
  gr50.save();
  var zl1 = new Nominal({nominal:1,count:10});
  zl1.save();
  var zl2 = new Nominal({nominal:2,count:4});
  zl2.save();
  var zl5 = new Nominal({nominal:5,count:5});
  zl5.save();
  var zl10 = new Nominal({nominal:10,count:3});
  zl10.save();
  var zl20 = new Nominal({nominal:20,count:7});
  zl20.save();
  var zl50 = new Nominal({nominal:50,count:2});
  zl50.save();


});



module.exports = app;
