var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/daecheon',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/main.html"));
});

router.get('/daecheon/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/about.html"));
});

router.get('/daecheon/room',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/room.html"));
});

router.get('/daecheon/room_sub',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/room_sub.html"));
});

router.get('/daecheon/facilities',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/facilities.html"));
});

router.get('/daecheon/facilities_sub',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/facilities_sub.html"));
});

router.get('/daecheon/service',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/service.html"));
});

router.get('/daecheon/community',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/community.html"));
});

router.get('/seocheon/reservation',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daecheon/reservation.html"));
});

module.exports = router;