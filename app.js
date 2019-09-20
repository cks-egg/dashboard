const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const ddRouter = require('./routes/dashboard');
const loginRouter = require('./routes/login');
const joinRouter = require('./routes/join');
const apiRouter = require('./routes/api');

const loggerFactory = require('./common/loggerFactory');

const app = express();
app.locals.logger = loggerFactory.logger;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('title', process.env.APP_TITLE);

app.use(require('morgan')("short", {stream: loggerFactory.stream}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(process.env.APP_CONTEXT + '/', indexRouter);
app.use(process.env.APP_CONTEXT + '/login', loginRouter);
app.use(process.env.APP_CONTEXT + '/join', joinRouter);
app.use(process.env.APP_CONTEXT + '/dashboard', ddRouter);
app.use(process.env.APP_CONTEXT + '/api', apiRouter);

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
  res.render('error.html');
});

module.exports = app;
