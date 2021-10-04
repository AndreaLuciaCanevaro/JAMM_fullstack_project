const express = require("express");
const router = express.Router();
const mainController= require("../controllers/mainController"); 

router.get("/", mainController.index);
//router.post('/', mainControllers.index); ver si hay que agregar esta ruta por post

router.get('/search', mainController.search); 

//agregamos sin saber
//router.get('/pruebaSession',function(req,res){
//    if(req.session.numeroVisitas==undifined){
//        req.session.numeroVisitas=0;
//    }
//    req.session.numeroVisitas++;
//    res.send('Session tiene el número: '+req.session.numeroVisitas);
//})

module.exports = router;