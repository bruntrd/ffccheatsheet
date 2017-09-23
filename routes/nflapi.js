var express= require('express');
var http = require('http');
var router = express.Router();

router.post('/', function(req,res,next){
    console.log(req.body);
    var options = {
        host: 'api.fantasy.nfl.com',
        path: '/v1/players/editordraftranks?format=json&count=100',
        port: 80

    };
    var request = http.get(options, function(response){
        var body = "";
        response.on('data', function(data){
            body+=data;
        });
        response.on('end', function(){
            res.send(JSON.parse(body));
            response.on('error', function(e){
                console.log('error ', e);
            });
        });
    });
    request.end();

});



module.exports = router;