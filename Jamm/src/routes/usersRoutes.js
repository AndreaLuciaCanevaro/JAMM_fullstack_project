const express = require("express");
const router = express.Router();
const usersController= require("../controllers/usersController");

//Middlewares
const upload = require('../middlewares/usersImgMW');
const validations = require('../middlewares/registerMW'); 

const multer = require('multer');
const path = require('path');

const{check}=require('express-validator');

//Formulario de Login
router.get("/login", usersController.login);

const validationsMailPw= [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('contraseña incorrecta')
];
router.post('/login',validationsMailPw,usersController.processLogin);

//Formulario de registro
router.get('/register', usersController.register);
//Procesar el registro
router.post('/register', upload.single('image'), validations, usersController.processRegister);

module.exports = router;