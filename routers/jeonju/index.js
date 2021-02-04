var express = require('express');
var router = express.Router();

function render_fc(content_name,ISB){
    var nav = require('../../layout/jeonju/nav');
    var header = require('../../layout/jeonju/header');
    var content = require('../../layout/jeonju/'+content_name);
    var footer = require('../../layout/jeonju/footer');

    if(ISB == true){
        var render = {
            nav:nav.nav(),
            header:header.header(),
            content:content.content(),
            footer:footer.footer(),
            css:content_name
        }
        return render;
    }else{
        var render = {
            nav:nav.nav(),
            header:"",
            content:content.content(),
            footer:footer.footer(),
            css:content_name
        }
        return render;
    }
}

router.get('/jeonju',(req,res)=>{
    res.render('jeonju',render_fc("main",true));
});

router.get('/jeonju/:query',(req,res)=>{
    var query = req.params.query;
    res.render('jeonju',render_fc(query,false));
});

module.exports = router;