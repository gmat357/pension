var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/seocheon',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/main.html"));
});

router.get('/seocheon/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/about.html"));
});

router.get('/seocheon/room',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/room.html"));
});

router.get('/seocheon/room_sub',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/room_sub.html"));
});

router.get('/seocheon/facilities',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/facilities.html"));
});

router.get('/seocheon/service',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/service.html"));
});

router.get('/seocheon/reservation',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/seocheon/reservation.html"));
});

module.exports = router;