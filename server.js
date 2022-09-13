const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const path = require('path')

const app=express();

app.use(morgan('tiny'));
app.set("view engine","ejs");

dotenv.config({path:'config.env'});
const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/add_user',(req,res)=>{
    res.render('add_user');
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>{ console.log(`Server is listening of Port ${PORT}`); });