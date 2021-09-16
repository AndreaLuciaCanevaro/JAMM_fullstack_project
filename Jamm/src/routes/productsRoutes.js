const express = require("express");
const router = express.Router();
const productsController= require("../controllers/productsController"); 

const multer = require('multer');
const path = require('path');



const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/images'));
    } ,

    filename: function(req, file, cb) {
        const newFileName = 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName);
    }
});

const upload = multer({ storage });




/*** GET ALL PRODUCTS ***/ 
router.get("/products", productsController.allProducts);

/*** GET ONE PRODUCT ***/ 
router.get("/productDetail/:id", productsController.productDetail);

/*** PRODUCT CART ***/
router.get("/productCart", productsController.productCart);
router.get("/emptyproductCart", productsController.emptyproductCart);


/*** CREATE ONE PRODUCT ***/ 
router.get("/crearProducto", productsController.crearProducto);
router.post('/productCart', productsController.store); 
router.post('/products', upload.single('fotoProducto'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get("/edit/:id", productsController.edit);
router.put('/edit/:id', upload.single('fotoProducto'), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy);

module.exports = router;