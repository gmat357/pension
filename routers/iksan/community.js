//   router module
const express = require('express');
const router = express.Router();

const header = require('../../layout/iksan/header');
const nav = require('../../layout/iksan/nav');
const content = require('../../layout/iksan/community');
const footer = require('../../layout/iksan/footer');

router.get('/iksan/community', (req,res)=>{
    const render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.community(),
        footer:footer.footer(),
        css:"community"
    }
    res.render('iksan',render);
});

module.exports = router;
