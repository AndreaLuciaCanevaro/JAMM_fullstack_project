const express = require('express');
const app = express();
app.set("view engine" , "ejs");


app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/emptyproductCart', (req,res)=>{
    res.sendFile(__dirname + '/views/emptyproductCart.html');
});