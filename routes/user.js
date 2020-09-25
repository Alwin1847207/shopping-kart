var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    let products = [
        {
            name: "I PHONE 11",
            category: 'Mobile',
            description: 'This is a good phone',
            image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
            }, {
            name: "I PHONE 12",
            category: 'Mobile',
            description: 'This is a good phone',
            image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
        }, {
            name: "I PHONE 10",
            category: 'Mobile',
            description: 'This is a good phone',
            image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
        }, {
            name: "I PHONE 13",
            category: 'Mobile',
            description: 'This is a good phone',
            image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1586586488946'
        },
    ]

    res.render('index', {products,admin:false});
});

module.exports = router;
