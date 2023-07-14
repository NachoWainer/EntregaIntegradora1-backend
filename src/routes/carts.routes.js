import  {Router}  from "express";


import  {CartManager}  from "../dao/dbManagers/cartManager.js";

const router = Router();
const cartHandler = new CartManager;



router.post('/',async function(req,res){
  
  const {status,message,data} = await cartHandler.addCart()
  res.send({status:status,message:message,value:data})

})

router.get('/:cid',async function(req,res){
  let id = parseInt(req.params.cid)
  const {status,message,data} = await cartHandler.getCartById(id)
  res.send({status:status,message:message,value:data})
 
})

router.post('/:cid/product/:pid',async function(req,res){
  let CartId = parseInt(req.params.cid)
  let ProductId = parseInt(req.params.pid)
  const {status,message,data} = await cartHandler.addProductToCartIdById(CartId,ProductId)

  res.send({status:status,message:message,value:data})
})
export default router