const express = require('express');
const router = express.Router();

const nav = require('../../layout/buan/nav');
const header = require('../../layout/buan/header');
const content = require('../../layout/buan/main');
const footer = require('../../layout/buan/footer');

router.get('/buan', (req,res)=>{
    const render = {
        nav:nav.nav(),
        header:header.header(),
        content:content.main(),
        footer:footer.footer(),
        css:"main"
    }
    res.render('buan', render);
})

module.exports = router;