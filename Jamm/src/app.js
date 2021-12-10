const express = require('express');
const session = require ('express-session');

const cors = require('cors');
// ESTO ES DE APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
const apiUsersRouter = require("./routes/api/users");
const apiProductsRouter = require("./routes/api/products");


const cookies = require ('cookie-parser');

const app = express(); 

const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware");

const mainRoutes = require ("./routes/mainRoutes"); 
const productsRoutes = require ("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");



const path = require('path');
const methodOverride = require('method-override');

app.use(cors());
// ESTO ES DE APIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
app.use("/api/users", apiUsersRouter);
app.use("/api/products", apiProductsRouter);

app.use(session({
    secret:'Esto es un secreto',
    resave: false,
    saveUninitialized: false,
}));

app.use (cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({extended:false}));

app.use(express.static ("../public"));





app.set("view engine" , "ejs");
//SET
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

//USE
app.use(methodOverride('_method'));
app.use(express.json());

app.use("/", mainRoutes);
app.use("/", productsRoutes);    // duda si el "/" está bien o sería "/products".
app.use("/", usersRoutes);       // duda si el "/" está bien o sería "/users".






app.listen(3010, ()=> console.log('Servidor funcionando'));






