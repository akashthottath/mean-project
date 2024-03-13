const products=require('../models/productSchema')

// get all product
exports.getallproductcontrollers=async(req,res)=>{
    try{
        const allproducts=await products.find()
        res.status(200).json(allproducts)
    }catch(err){
        res.status(401).json(err)
    }
}

 // to get a single product
 exports.getAproduct=async(req,res)=>{

    const {id}=req.params
    try{
        const product=await products.findOne({id})
        res.status(200).json(product)

    }catch(err){
        res.status(401).json(err)
    }
 }