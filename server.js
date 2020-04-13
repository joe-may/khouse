var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
const methodOverride = require('method-override');
require('./config/database')

// load the env vars
require('dotenv').config();

// create the Express app
var app = express();

// connect to the MongoDB with mongoose
require('./config/database');

//load and config passport.js
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var flightsRoutes = require('./routes/flights');

// var methodOverride = require('method-override');
var indexRouter = require('./routes/index');
var flightsRouter = require('./routes/flights');
const destinationsRouter = require('./routes/destinations')
const ticketsRouter = require('./routes/tickets')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
app.use(methodOverride('_method'));

// mount all routes with appropriate base paths
app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', destinationsRouter)
app.use('/', ticketsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
