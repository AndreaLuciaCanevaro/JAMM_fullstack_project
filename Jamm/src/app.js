//CONST Y REQUIRE
const express = require('express');
const app = express(); 
const path = require('path');
const methodOverride = require('method-override');
const session = require ('express-session');
const mainRoutes = require ("./routes/mainRoutes"); 
const productsRoutes = require ("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");

const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware");

//USE
app.use(express.static ("../public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret:'Esto es un secreto',
    resave: false,
    saveUninitialized: false,
}));
//revisar ruta
app.use("/", mainRoutes);
app.use("/", productsRoutes);
app.use("/", usersRoutes);
//va siempre después de app.use de session
app.use(userLoggedMiddleware);

//SET
app.set("view engine" , "ejs");
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});