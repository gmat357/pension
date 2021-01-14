const express = require('express');
const router = express.Router();
const nav = require('../../layout/gunsan/nav');
const room = require('../../layout/gunsan/room');
const footer = require('../../layout/gunsan/footer');

router.get('/gunsan/room',(req,res)=>{
    const render = {
        nav:nav.nav(),
        content:room.room(),
        footer:footer.footer(),
        css:"room"
    }
    res.render('gunsan', render);
});

module.exports = router;
