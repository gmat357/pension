const express = require('express');
const router = express.Router();

const nav = require('../../layout/buan/nav');
const content = require('../../layout/buan/reservation');
const footer = require('../../layout/buan/footer');

router.get('/buan/reservation', (req,res)=>{
    const render = {
        nav:nav.nav(),
        header:"",
        content:content.reservation(),
        footer:footer.footer(),
        css:"reservation"
    }
    res.render('buan', render);
})

module.exports = router;