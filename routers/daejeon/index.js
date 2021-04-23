var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/daejeon',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daejeon/main.html"));
});

router.get('/daejeon/about/:page',(req,res)=>{
    var page = req.params.page;
    if(page == 1)
    res.sendFile(path.join(__dirname,"../../html/daejeon/about.html"));
    if(page == 2)
    res.sendFile(path.join(__dirname,"../../html/daejeon/about1.html"));
    if(page == 3)
    res.sendFile(path.join(__dirname,"../../html/daejeon/about2.html"));
});

router.get('/daejeon/room/:page',(req,res)=>{
    var page = req.params.page;
    if(page == 1)
    res.sendFile(path.join(__dirname,"../../html/daejeon/room.html"));
    if(page == 2)
    res.sendFile(path.join(__dirname,"../../html/daejeon/room2.html"));
    if(page == 3)
    res.sendFile(path.join(__dirname,"../../html/daejeon/room3.html"));
});

router.get('/daejeon/around',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daejeon/around.html"));
});

router.get('/daejeon/community/:page',(req,res)=>{

    var page = req.params.page;
    if(page == 1)
    res.sendFile(path.join(__dirname,"../../html/daejeon/community.html"));
    if(page == 2)
    res.sendFile(path.join(__dirname,"../../html/daejeon/community2.html"));
    if(page == 3)
    res.sendFile(path.join(__dirname,"../../html/daejeon/community3.html"));
});

router.get('/daejeon/facilities',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daejeon/facilities.html"));
});

router.get('/daejeon/location',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/daejeon/location.html"));
});

module.exports = router;