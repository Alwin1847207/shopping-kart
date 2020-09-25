var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');

/* GET users listing. */
router.get('/', function(req, res, next) {

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

  res.render('admin/view-products',{admin:true,products})
});

router.get('/add-product',function (req,res){
  res.render('admin/add-product',{admin:true})
});

router.post('/add-product',(req,res)=>{
  // console.log(req.body);
  // console.log(req.files.Image);
  productHelper.addProduct(req.body,(id)=>{
    let image = req.files.Image
    image.mv('./public/images/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render('admin/add-product');
      }else{
        console.log(err);
      }
    })
  });
})

module.exports = router;
