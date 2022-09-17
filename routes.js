const express=require('express');
const router=express.Router();
const model=require('./model');

router.get('/get/user', async (req,res)=>{
    try{
        const obj = await model.find();
        res.json(obj);
    }catch(err){
        res.send('Error' + err);
    }
});

router.post('/add/user', async (req,res)=>{
    const obj=new model({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });
    try{
        const a1=await obj.save();
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
});

module.exports = router;