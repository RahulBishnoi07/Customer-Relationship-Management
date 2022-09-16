const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

dotenv.config({path:'config.env'});

const app=express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true});

const con=mongoose.connection;

con.on('open',()=>{
    console.log(`MongoDB connected : ${process.env.MONGO_URI}`);
});

app.use(morgan('tiny'));

app.set("view engine","ejs");

const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/add_user',(req,res)=>{
    res.render('add_user');
});

app.get('/update_user',(req,res)=>{
    res.render('update_user');
});

app.use(express.json());

const routes=require('./routes');

app.use('/api',routes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>{ console.log(`Server is listening of Port ${PORT}`); });