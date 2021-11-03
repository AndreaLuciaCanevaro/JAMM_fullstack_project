const express = require('express');
const session = require ('express-session');
const cookies = require ('cookie-parser');

const app = express(); 

const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware");

app.use(session({
    secret:'Esto es un secreto',
    resave: false,
    saveUninitialized: false,
}));

app.use (cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({extended:false}));

app.use(express.static ("../public"));
app.listen(3010, ()=> console.log('Servidor funcionando'));


app.set("view engine" , "ejs");


const mainRoutes = require ("./routes/mainRoutes"); 
const productsRoutes = require ("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");

app.use("/", mainRoutes);
app.use("/", productsRoutes);    // duda si el "/" está bien o sería "/products".
app.use("/", usersRoutes);       // duda si el "/" está bien o sería "/users".


const path = require('path');
const methodOverride = require('method-override');



//USE
app.use(methodOverride('_method'));
app.use(express.json());


//va siempre ANTES de app.use de session

//SET
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

//revisar ruta


