const express = require('express');
const app = express();
const path = require('path');
app.set("view engine" , "ejs");
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

const mainRoutes = require ("./routes/mainRoutes");
app.use(express.static ("../public"));
app.use("/", mainRoutes);

app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});





