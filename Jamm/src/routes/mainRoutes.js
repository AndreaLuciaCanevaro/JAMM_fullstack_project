const express = require("express");
const router = express.Router();
const mainController= require("../controllers/mainController"); 

router.get("/", mainController.index);
//router.post('/', mainControllers.index); ver si hay que agregar esta ruta por post

router.get('/search', mainController.search); 

module.exports = router;