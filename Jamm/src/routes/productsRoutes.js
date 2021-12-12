const express = require("express");
const router = express.Router();
const productsController= require("../controllers/productsController"); 
const authAdminMiddleware= require("../middlewares/authAdminMiddleware"); 
const authMiddleware= require("../middlewares/authMiddleware"); 

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

/*** CREAR PRODUCTOS ***/
router.get("/crearProducto", authAdminMiddleware, productsController.crear);
router.post("/crearProducto", authAdminMiddleware, upload.single("fotoProducto"), productsController.guardar);

/*** LISTAR PRODUCTOS ***/
router.get("/products", productsController.listar);          


/*** PRODUCT CART ***/
router.get("/productCart", productsController.productCart);
router.get("/emptyproductCart", productsController.emptyproductCart);


/*** DETALLE DE PRODUCTO ***/
router.get("/productDetail/:id", productsController.detalle);

/*** EDITAR PRODUCTO ***/
router.get("/edit/:id", authAdminMiddleware, productsController.editar);
router.put("/edit/:id", authAdminMiddleware, upload.single("fotoProducto"), productsController.actualizar); 

/*** BORRAR PRODUCTO ***/
router.delete("/delete/:id", authAdminMiddleware, productsController.borrar);

/*** GET ALL PRODUCTS ***/ 
//router.get("/products", productsController.allProducts);

/*** GET ONE PRODUCT ***/ 
//router.get("/productDetail/:id", productsController.productDetail);



/*** CREATE ONE PRODUCT ***/ 
//router.get("/crearProducto", productsController.crearProducto);
//router.post('/productCart', productsController.store); 
//router.post('/products', upload.single('fotoProducto'), productsController.store);

/*** EDIT ONE PRODUCT ***/ 
//router.get("/edit/:id", authMiddleware, productsController.edit);
//router.put("/edit/:id", upload.single('fotoProducto'), productsController.update); 

/*** DELETE ONE PRODUCT***/ 
//router.delete('/edit/:id', productsController.destroy);

module.exports = router;