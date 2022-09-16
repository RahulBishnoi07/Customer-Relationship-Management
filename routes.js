const express=require('express');
const router=express.Router();
const model=require('./model');

router.get('/get_user', async (req,res)=>{
    try{
        const obj = await model.find();
        res.json(obj);
    }catch(err){
        res.send('Error' + err);
    }
});

router.post('/add_user', async (req,res)=>{
    console.log(req.body);
    const obj=new model({
        name: req.body.name,
        gmail: req.body.gmail,
        gender: req.body.gender,
        status: req.body.status
    });
    try{
        const a1=await obj.save();
        res.json(a1);
    }catch(err){
        console.log(err);
    }
});

module.exports = router;