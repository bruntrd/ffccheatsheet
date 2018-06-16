var express = require('express');
var app = express();
var index = require('./routes/index');
var nflapi = require('./routes/nflapi');
var auth = require('./routes/auth');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoURI = "mongodb://127.0.0.1:27017/ffcheatsheet";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log('try one more time');
    if(err.message == 'connect ECONNREFUSED 127.0.0.1:27017' && count < 2){
        console.log('we got a mongo connection error, you got 20 seconds', err)
        console.log(count);
        count ++;

        setTimeout(function(){
            console.log('try again ?');
            mongoose.connect(mongoURI).connection
        },20000);


    }
});
MongoDB.once('open', function(err){
    console.log('mongo connection open');
});

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.set("port", (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.listen(app.get("port"), function(){
    console.log("listening on port: " + app.get("port"));

});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/nflapi',nflapi);
app.use('/authenticate', auth);
app.use('/', index);


module.exports = app;