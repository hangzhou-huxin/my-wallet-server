
var express = require('express');
var web3 = require('./api/web3');

var router = express.Router();

//显示注册页
router.get('/createAccount',web3.createAccount) ;


module.exports = router;
