

import express from 'express'

const router= express.Router();



router.get('/realtimeproducts',(req,res)=>{
 
    res.render('realTimeProducts',{})
    

})
router.get('/',async (req,res)=>{
    
    res.render('home',{})
    

})
router.get('/chat',async (req,res)=>{
    res.render('chat',{})

    

})

export default router;
