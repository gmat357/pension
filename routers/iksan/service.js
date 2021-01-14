//   router module
const express = require('express');
const router = express.Router();

const header = require('../../layout/iksan/header');
const nav = require('../../layout/iksan/nav');
const content = require('../../layout/iksan/service');
const footer = require('../../layout/iksan/footer');

router.get('/iksan/service', (req,res)=>{
    const render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.service(),
        footer:footer.footer(),
        css:"service"
    }
    res.render('iksan',render);
});

module.exports = router;
