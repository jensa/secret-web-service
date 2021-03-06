const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const rsvp = require('./routes/rsvp-route');
const GG = require('./routes/home');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/rsvp', rsvp);
app.use('/', GG);

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
    console.log(err.message);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.message);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
