var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/seocheon',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/main.html"));
});

router.get('/seocheon/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/about.html"));
});

router.get('/seocheon/room',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/room.html"));
});

router.get('/seocheon/room_sub',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/room_sub.html"));
});

router.get('/seocheon/facilities',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/facilities.html"));
});

router.get('/seocheon/service',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/service.html"));
});

router.get('/seocheon/reservation',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/reservation.html"));
});

module.exports = router;