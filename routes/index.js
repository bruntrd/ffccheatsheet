var express= require('express');
var router = express.Router();
var path = require('path');


router.get("/*", function(req,res,next){

    var file = "../public/views/index.html";
    res.sendFile(path.resolve(__dirname, "../public", file));
});


module.exports = router;