const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');

const app=express();

app.use(morgan('tiny'));

dotenv.config({path:'config.env'});
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.send("CRUD Application");
});

app.listen(PORT,()=>{ console.log(`Server is listening of Port ${PORT}`); });