const express = require('express');
const router = express.Router();
const nav = require('../../layout/gunsan/nav');
const infomation = require('../../layout/gunsan/infomation');
const footer = require('../../layout/gunsan/footer');

router.get('/gunsan/infomation',(req,res)=>{
    const render = {
        nav:nav.nav(),
        content:infomation.infomation(),
        footer:footer.footer(),
        css:"infomation"
    }
    res.render('gunsan', render);
});

module.exports = router;
