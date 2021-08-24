const express = require("express");
const router = express.Router();
const mainController= require("../controllers/mainController"); 
router.get("/emptyproductCart", mainController.emptyproductCart);
router.get("/", mainController.index);
router.get("/login", mainController.login);
router.get("/productCart", mainController.productCart);
router.get("/productDetail", mainController.productDetail);
router.get("/register", mainController.register);
router.get("/crearProducto", mainController.crearProducto);
router.get("/editarProducto", mainController.editarProducto);




// esto va??
//router.get ("/register", (req, res) =>{
//    res.send ("Registro");
//});
//router.get ("/productos/:id", (req, res) => {
//    const idProducto = req.params.id;
//    res.send ("Listado de productos");
//});


module.exports = router;