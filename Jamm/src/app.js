const express = require('express');
const app = express();
app.set("view engine" , "ejs");


app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.render(__dirname + 'index');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.ejs');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.ejs');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.ejs');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.ejs');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.ejs');
});

app.get('/emptyproductCart', (req,res)=>{
    res.sendFile(__dirname + '/views/emptyproductCart.ejs');
});