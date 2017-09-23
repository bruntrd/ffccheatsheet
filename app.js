var express = require('express');
var app = express();
var index = require('./routes/index');
var nflapi = require('./routes/nflapi');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set("port", (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.listen(app.get("port"), function(){
    console.log("listening on port: " + app.get("port"));

});

app.use('/nflapi',nflapi);
app.use('/', index);


module.exports = app;