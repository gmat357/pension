var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/gongju',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/gongju/main.html"));
});

module.exports = router;