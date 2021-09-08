const express = require("express");
const router = express.Router();
const productsController= require("../controllers/productsController"); 

/*** GET ALL PRODUCTS ***/ 
router.get("/products", productsController.allProducts);

/*** GET ONE PRODUCT ***/ 
router.get("/productDetail/:id", productsController.productDetail);

router.get("/crearProducto", productsController.crearProducto);
router.get("/editarProducto", productsController.editarProducto);
router.get("/productCart", productsController.productCart);
router.get("/emptyproductCart", productsController.emptyproductCart);


/*** CREATE ONE PRODUCT ***/ 
//router.get('/create/', productsController.create); 
//router.post('/', productsController.store); 

/*** EDIT ONE PRODUCT ***/ 
//router.get('/:id/edit', productsController.edit); 
//router.put('/:id', productsController.update); 

/*** DELETE ONE PRODUCT***/ 
//router.delete('/:id', productsController.destroy);

module.exports = router;