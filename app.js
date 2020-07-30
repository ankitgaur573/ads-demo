var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path')
var cors = require('cors');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'public')))


// controllers
var renderJSRouter = require('./routes/render.js');

// app.use('/', indexRouter);
app.use('/render', renderJSRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  var message = err.message ? err.message : "Something went wrong";
  var body = {
    "message": message
  }
  
  res.send(body);
});

module.exports = app;
