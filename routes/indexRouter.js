const express = require('express')
const router = express.Router()
const store =[{
    name: 'apple',
    price: 1.5
}]
router.get('/',(req,res)=>{
    res.json(store)
})
router.get('/get-all-products',(req,res)=>{
    let message = []
    for(let obj of store){
        message.push(obj.name)
    }
    res.json(message)

})
router.get("/get-product/:productName",(req,res)=>{
    let search = req.params
    let founditem 
    for(let item of store){
        if(search.productName === item.name){
            founditem = item
            break
        }
    }
    if(!founditem){
        res.end("item not found")
    } else {
        res.json(founditem)
    }
})

router.get("/create-product",(req,res)=>{
    let doesItemExist
    for(let object of store){
        if(object.name === req.body.name){
            doesItemExist = true
            break
        }
    }
    if(doesItemExist){
        res.end("this item exists")
    } else{
        store.push({
            name:req.body.name,
            price:req.body.price
        })
        res.json({
            data:store,
            message:"new item has been added"
        })
    }
})

module.exports = router