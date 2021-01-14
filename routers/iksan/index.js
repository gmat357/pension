//   router module
const express = require('express');
const router = express.Router();

const header = require('../../layout/iksan/header');
const nav = require('../../layout/iksan/nav');
const content = require('../../layout/iksan/main');
const footer = require('../../layout/iksan/footer');

router.get('/iksan', (req,res)=>{
    const render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.main(),
        footer:footer.footer(),
        css:"main"
    }
    res.render('iksan',render);
});

module.exports = router;
