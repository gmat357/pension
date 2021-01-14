const express = require('express');
const router = express.Router();
const nav = require('../../layout/gunsan/nav');
const main = require('../../layout/gunsan/main');
const footer = require('../../layout/gunsan/footer');

router.get('/gunsan',(req,res)=>{
    const render = {
        nav:nav.nav(),
        content:main.main(),
        footer:footer.footer(),
        css:"main"
    }
    res.render('gunsan', render);
});

module.exports = router;
