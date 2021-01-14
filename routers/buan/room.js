const express = require('express');
const router = express.Router();

const nav = require('../../layout/buan/nav');
const content = require('../../layout/buan/room');
const footer = require('../../layout/buan/footer');
const sub = require('../../layout/buan/room_sub');

router.get('/buan/room', (req,res)=>{
    const render = {
        nav:nav.nav(),
        header:"",
        content:content.room(),
        footer:footer.footer(),
        css:"room"
    }
    res.render('buan', render);
})

router.get('/buan/room_sub',(req,res)=>{
    const render = {
        nav:nav.nav(),
        header:"",
        content:sub.room_sub(),
        footer:footer.footer(),
        css:"room_sub"
    }
    res.render('buan', render);
})

module.exports = router;