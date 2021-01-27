var express = require('express');
var router = express.Router();

function render_fc(content_name){
    var header = require('../../layout/kimje/header');
    var nav = require('../../layout/kimje/nav');
    var content = require(`../../layout/kimje/${content_name}`);
    var footer = require('../../layout/kimje/footer');

    var render = {
        header:header.header(),
        nav:nav.nav(),
        content:content.content(),
        footer:footer.footer(),
        css:content_name
    }

    return render;
}

router.get('/kimje',(req,res)=>{
    res.render('kimje',render_fc("main"));
});

router.get('/kimje/:query',(req,res)=>{
    var query = req.params.query;
    res.render('kimje',render_fc(query));
});

module.exports = router;