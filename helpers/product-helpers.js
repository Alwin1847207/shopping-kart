var db = require('../config/connection');
var collection = require('../config/collections');
var objectId = require('mongodb').ObjectID;
module.exports={
    addProduct:(product,callback)=>{
        console.log(product);
        db.get().collection(collection.PRODUCT_COLLECTION).insertOne(product).then((data)=>{
            // console.log(data);
            callback(data.ops[0]._id)
        })
    },

    getAllProducts:()=>{
        return new Promise(async (resolve,reject)=>{
            let products = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray();
            resolve(products)
        })
    },

    deleteProduct:(productId)=>{
        return new Promise(async (resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(productId)}).then((response)=>{
                resolve(response)
            })
        })
    },

    getProductDetals:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(productId)}).then((product)=>{
                resolve(product)
            })
        })
    },

    updateProduct:(productID,productDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).updateOne({_id:objectId(productID)},{
                $set:{
                    Name:productDetails.Name,
                    Description: productDetails.Description,
                    Price: productDetails.Price,
                    Category:productDetails.Category,
                }
            }).then((response)=>{
                resolve()
            })
        })
    }
}