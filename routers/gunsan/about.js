const express = require('express');
const router = express.Router();
const nav = require('../../layout/gunsan/nav');
const about = require('../../layout/gunsan/about');
const footer = require('../../layout/gunsan/footer');

router.get('/gunsan/about',(req,res)=>{
    const render = {
        nav:nav.nav(),
        content:about.about(),
        footer:footer.footer(),
        css:"about"
    }
    res.render('gunsan', render);
});

module.exports = router;
