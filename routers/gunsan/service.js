const express = require('express');
const router = express.Router();
const nav = require('../../layout/gunsan/nav');
const service = require('../../layout/gunsan/service');
const footer = require('../../layout/gunsan/footer');

router.get('/gunsan/service',(req,res)=>{
    const render = {
        nav:nav.nav(),
        content:service.service(),
        footer:footer.footer(),
        css:"service"
    }
    res.render('gunsan', render);
});

module.exports = router;
