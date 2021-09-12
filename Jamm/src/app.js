const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.set("view engine" , "ejs");
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

const mainRoutes = require ("./routes/mainRoutes");
const productsRoutes = require ("./routes/productsRoutes");
app.use(express.static ("../public"));
app.use("/", mainRoutes);
app.use("/", productsRoutes);

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});





