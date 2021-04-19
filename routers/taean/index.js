var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/taean',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/main.html"));
});

router.get('/taean/about/:page',(req,res)=>{
    var page = req.params.page;
    if(page == 1)
    res.sendFile(path.join(__dirname,"../../html/taean/about.html"));
    if(page == 2)
    res.sendFile(path.join(__dirname,"../../html/taean/about2.html"));
    if(page == 3)
    res.sendFile(path.join(__dirname,"../../html/taean/about3.html"));
});

router.get('/taean/villa',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/villa.html"));
});

router.get('/taean/villa_sub',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/villa_sub.html"));
});

router.get('/taean/facilities',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/facilities.html"));
});

router.get('/taean/around',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/around.html"));
});

router.get('/taean/special',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/special.html"));
});

router.get('/taean/community',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/community.html"));
});

router.get('/taean/qna',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/qna.html"));
});

router.get('/taean/review',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../html/taean/review.html"));
});

module.exports = router;