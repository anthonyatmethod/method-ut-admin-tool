var Firebase = require("firebase");


var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var db = require('./model/db'),
    blob = require('./model/blobs');

var routes = require('./routes/index'),
    blobs = require('./routes/blobs');

//var users = require('./routes/users');

var app = express();

//////////////////////////////// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//////////////////////////////// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/blobs', blobs);
// app.use('/users', users);
// app.use('/consoledash', consoledash);


app.route('/test/', function(){
  TODO - Generate Tests Object
});

app.route('/test/finish', function(){

});

app.get('/test/reset', function(){

});

app.get('/test/delete', function(){

});



var activeSessionRef;
var activeTest = null;
// var testConfig = {
//       ""
//  };

function setActiveSession(sessionID){
    activeSessionRef = new Firebase("https://reactsync.firebaseio.com/sessions/" + sessionID);
    activeSessionRef.set({
      init: "Firebase"
    })
    activeSessionRef.on("value", function(snapshot){
        console.log(snapshot.val());
        if(activeTest != null){
          activeTest.push(snapshot.val());
        }
    });
}





app.post('/blobs/consoledash', function(req, res, next){
  console.log(req.body);

  setActiveSession(req.body.sessionID);
  res.render('blobs/consoledash.jade', req.body);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



//////////////////////////////// error handlers

//////////////////////////////// development error handler
//////////////////////////////// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

//////////////////////////////// production error handler
//////////////////////////////// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
