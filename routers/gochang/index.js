var express = require('express');
var router = express.Router();

function render_fc(content_name){
    var nav = require('../../layout/gochang/nav');
    var content = require('../../layout/gochang/'+content_name);
    var footer = require('../../layout/gochang/footer');
    var render = {
        nav:nav.nav(),
        content:content.content(),
        footer:footer.footer(),
        css:content_name
    }
    return render;
}

router.get('/gochang',(req,res)=>{
    res.render('gochang',render_fc('main'));
});

router.get('/gochang/:query',(req,res)=>{
    var query = req.params.query;
    res.render('gochang',render_fc(query));
});

module.exports = router;