const express = require('express');
const router = express.Router();
const nav = require('../../layout/gunsan/nav');
const travel = require('../../layout/gunsan/travel');
const footer = require('../../layout/gunsan/footer');

router.get('/gunsan/travel',(req,res)=>{
    const render = {
        nav:nav.nav(),
        content:travel.travel(),
        footer:footer.footer(),
        css:"travel"
    }
    res.render('gunsan', render);
});

module.exports = router;
