const express = require('express');
const router = express.Router();

const nav = require('../../layout/buan/nav');
const content = require('../../layout/buan/travel');
const footer = require('../../layout/buan/footer');

router.get('/buan/travel', (req,res)=>{
    const render = {
        nav:nav.nav(),
        header:"",
        content:content.travel(),
        footer:footer.footer(),
        css:"travel"
    }
    res.render('buan', render);
})

module.exports = router;