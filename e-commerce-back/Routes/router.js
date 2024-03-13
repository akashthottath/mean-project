const express=require('express')

const productController=require('../controllers/productController')

const userController=require('../controllers/userController')

// to get all request
const router=new express.Router()

router.get('/products/all',productController.getallproductcontrollers)

// single product get
router.get('/product/view/:id',productController.getAproduct)

// register
router.post('/user/register',userController.registerController)

// login
router.post('/user/login',userController.loginController)

module.exports=router

