var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// For session to store data
var session = require('express-session');
// Register routes 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var leaguesRouter = require('./routes/leagues');
var teamsRouter = require('./routes/teams');
var app = express();

// enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const cors = require('cors');
app.use(cors({
  origin:[ "http://localhost:4200"],
credentials:true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// session 
app.use(session({
  secret: "hca2",
  resave: "true",
  saveUninitialized: "true"
}));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/leagues', leaguesRouter);
app.use('/teams', teamsRouter);


//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

// set locals, only providing error in development
res.locals.message = err.message;
res.locals.error = req.app.get('env') === 'development' ? err : {};

// render the error page
res.status(err.status || 500);
res.render('error');
});

module.exports = app;
