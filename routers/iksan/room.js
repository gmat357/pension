//   router module
const express = require('express');
const router = express.Router();

const header = require('../../layout/iksan/header');
const nav = require('../../layout/iksan/nav');
const content = require('../../layout/iksan/room');
const room_page = require('../../layout/iksan/room_page');
const footer = require('../../layout/iksan/footer');

router.get('/iksan/room', (req,res)=>{
    const render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.room(),
        footer:footer.footer(),
        css:"room"
    }
    res.render('iksan',render);
});

router.get('/iksan/room_page', (req,res)=>{
    const render = {
        header:header.header(),
        nav:nav.nav(),
        content:room_page.room_page(),
        footer:footer.footer(),
        css:"room_page"
    }
    res.render('iksan',render);
});

module.exports = router;
