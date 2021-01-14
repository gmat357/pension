const express = require('express');
const router = express.Router();

const nav = require('../../layout/buan/nav');
const content = require('../../layout/buan/infomation');
const footer = require('../../layout/buan/footer');

router.get('/buan/infomation', (req,res)=>{
    const render = {
        nav:nav.nav(),
        header:"",
        content:content.infomation(),
        footer:footer.footer(),
        css:"infomation"
    }
    res.render('buan', render);
})

module.exports = router;