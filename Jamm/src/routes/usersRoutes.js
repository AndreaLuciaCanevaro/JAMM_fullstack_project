const express = require("express");
const router = express.Router();

//Controller
const usersController= require("../controllers/usersController");

//Middlewares
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware'); 
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware'); 

const multer = require('multer');
const path = require('path');

const{body}=require('express-validator');

//Formulario de Login
router.get("/login", guestMiddleware, usersController.login);

const validationsMailPw= [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({min:8}).withMessage('contraseña incorrecta')
];
//Procesar el login
router.post('/login',validationsMailPw,usersController.processLogin);

//Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

//Procesar el registro
router.post('/register', upload.single('image'), validations, usersController.processRegister);

//Si las credenciales son válidas se redirige al usuario a esta ruta
router.get ('/userProfile',authMiddleware,  usersController.profile);

//Logout
router.get ('/logout/', usersController.profile);

module.exports = router;