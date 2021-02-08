const { render } = require('ejs');
var express = require('express');
var router = express.Router();

function render_fc(content_name){
    var header = require('../../layout/jeongeup/header');
    var nav = require('../../layout/jeongeup/nav');
    var content = require('../../layout/jeongeup/'+content_name);
    var footer = require('../../layout/jeongeup/footer');
    var render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.content(),
        footer:footer.footer(),
        css:content_name
    };

    return render;
}

router.get('/jeongeup',(req,res)=>{
    res.render('jeongeup',render_fc('main'));
});

router.get('/jeongeup/:query',(req,res)=>{
    var query = req.params.query;
    res.render('jeongeup',render_fc(query));
});

module.exports = router;