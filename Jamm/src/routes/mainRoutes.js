const express = require ("express");
const router = express.Router();
const mainController= require("./controllers/mainController"); 
router.get ("/", mainController.emptyproductCart);
router.get ("/", mainController.index);
router.get ("/", mainController.login);
router.get ("/", mainController.productCart);
router.get ("/", mainController.productDetail);
router.get ("/", mainController.register);


// esto va??
//router.get ("/register", (req, res) =>{
//    res.send ("Registro");
//});
//router.get ("/productos/:id", (req, res) => {
//    const idProducto = req.params.id;
//    res.send ("Listado de productos");
//});


module.exports=router;