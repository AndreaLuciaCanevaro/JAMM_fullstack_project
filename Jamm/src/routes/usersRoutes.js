const express = require("express");
const router = express.Router();
const usersController= require("../controllers/usersController");
const upload = require('../middlewares/usersImageMW');
const validations = require('../middlewares/registerValidationsMW'); 

const multer = require('multer');
const path = require('path');

const{check}=require('express-validator');

router.get("/login", usersController.login);
router.get("/register", usersController.register);

router.post('/login',[
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('contraseña incorrecta')
],usersController.processLogin);

router.get('/register', usersControllers.register);
router.post('/register', upload.single('image'), validations, usersControllers.processRegister);

module.exports = router;