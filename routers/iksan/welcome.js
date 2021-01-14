//   router module
const express = require('express');
const router = express.Router();

const header = require('../../layout/iksan/header');
const nav = require('../../layout/iksan/nav');
const content = require('../../layout/iksan/welcome');
const footer = require('../../layout/iksan/footer');

router.get('/iksan/welcome', (req,res)=>{
    const render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.welcome(),
        footer:footer.footer(),
        css:"welcome"
    }
    res.render('iksan',render);
});

module.exports = router;
