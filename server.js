const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');

dotenv.config({path:'config.env'});

const app=express();

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true});

const con=mongoose.connection;

con.on('open',()=>{
    console.log(`MongoDB connected : ${process.env.MONGO_URI}`);
});

app.use(morgan('tiny'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");

const PORT=process.env.PORT;

app.get('/',(req,res)=>{
    axios.get('http://localhost:8808/api/get/user')
        .then(function(response){
            res.render('home',{users:response.data});
        })
});

app.get('/addUserPage',(req,res)=>{
    res.render('addUserPage');
});

app.get('/updateUser',(req,res)=>{
    res.render('updateUser');
});

app.use(express.json());

const routes=require('./routes');
const { response } = require('express');

app.use('/api',routes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT,()=>{ console.log(`Server is listening of Port ${PORT}`); });