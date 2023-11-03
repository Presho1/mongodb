const express = require('express');
const router = express.Router()
const Product = require('../models/product')

router.get('/product',(req,res)=>{
    Product.find()
    .then((p)=>{
        res.json(p)
    })
    .catch((error)=>{
        res.json({
            message: error.message
        })
    })
})

router.get('/product/:id',(req,res)=>{
    res.send("Product read successfully")
})

router.post('/product',(req,res)=>{
    const newProduct = new Product({
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        rating: req.body.rating
    })

    newProduct.save()
    .then((np)=>{
        res.json(np)
    })
    .catch((error)=>{
        res.json({
            message: error.message
        })
    })
})

router.put('/product',(req,res)=>{
    res.send("Product updated successfully")
})

router.delete('/product',(req,res)=>{
    res.send("Product deleted successfully")
})



module.exports = router





