const express = require('express');
const router = express.Router();

const nav = require('../../layout/buan/nav');
const content = require('../../layout/buan/about');
const footer = require('../../layout/buan/footer');

router.get('/buan/about', (req,res)=>{
    const render = {
        nav:nav.nav(),
        header:"",
        content:content.about(),
        footer:footer.footer(),
        css:"about"
    }
    res.render('buan', render);
})

module.exports = router;