var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/signup', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });
    user.save(function (err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                title: 'error',
                error: err
            });
        }
        res.status(201).json({
            message: 'user created',
            obj: result
        });
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err, user) {
        if(err){
            console.log(err);
            return res.status(500).json({
                title: 'error',
                error: err
            });
        }
        if(!user){
            return res.status(500).json({
                title: 'login failed',
                error: {message: 'invalid credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)){
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'invalid credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret',{expiresIn:7200});
        res.status(201).json({
            message: 'User Logged In',
            token : token,
            userId: user._id
        });
    });
});
module.exports = router;