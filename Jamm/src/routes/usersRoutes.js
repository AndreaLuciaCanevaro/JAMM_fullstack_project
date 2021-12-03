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
const userLoggedMiddleware = require("../middlewares/userLoggedMiddleware");

//Formulario de Login
router.get("/users/login", guestMiddleware, usersController.login);

const validationsMailPw= [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({min:8}).withMessage('contraseña incorrecta')
];
//Procesar el login
router.post('/users/login',validationsMailPw,usersController.loginProcess);

//Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

//Procesar el registro
router.post('/register', upload.single('image'), validations, guestMiddleware, usersController.processRegister);

//Formulario de userProfile
// router.get("/users/userProfile", userLoggedMiddleware, usersController.profile);

//Si las credenciales son válidas se redirige al usuario a esta ruta
router.get ('/users/userProfile',authMiddleware,  usersController.profile);
router.put ('/users/userProfile',authMiddleware, upload.single('image'), usersController.update);

//EDITAR DE USUARIO
router.get('/users/userEdit', authMiddleware, usersController.edit) // verificar ruta
router.put('/users/userEdit', authMiddleware, upload.single('image'), usersController.update)

//Logout
router.get ('/users/logout', usersController.logout);

module.exports = router;    