var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//custome
// app.post('/demo1', async (req, res) => {
//   const status = demo_status1[request_count];
//   request_count = request_count === demo_status.length - 1 ? 0 : request_count + 1;  if (status === 200) {
//     await Axios.post(
//       'https://hooks.slack.com/services/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',
//       {
//         text: `
//           Webhook success 👍
//         `,
//         mrkdwn: true,
//       }
//     );
//   }  res.status(status).json({
//     response_message: {
//       message: `Hi${
//         req.query.name ? ` ${req.query.name}` : ''
//       } 👋 ~ This is where I would have my response or error message`,
//       code: status,
//     },
//   });
// });

module.exports = app;
