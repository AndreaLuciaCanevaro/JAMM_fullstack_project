const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require ('express-session');

app.set("view engine" , "ejs");
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

const mainRoutes = require ("./routes/mainRoutes");
const productsRoutes = require ("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");

app.use(express.static ("../public"));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({secret:'Esto es un secreto'}));

//revisar ruta de mierda
app.use("/", mainRoutes);
app.use("/", productsRoutes);
app.use("/", usersRoutes);


app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});





