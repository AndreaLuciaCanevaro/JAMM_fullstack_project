const express = require("express");
const router = express.Router();
const usersController= require("../controllers/usersController");
const upload = require('../middlewares/usersImgMW');
const validations = require('../middlewares/registerMW'); 

const multer = require('multer');
const path = require('path');

const{check}=require('express-validator');

router.get("/login", usersController.login);
router.get("/register", usersController.register);

const validationsMailPw= [
    check('email').isEmail().withMessage('Email inválido'),
    check('password').isLength({min:8}).withMessage('contraseña incorrecta')
];
router.post('/login',validationsMailPw,usersController.processLogin);

router.get('/register', usersController.register);
router.post('/register', upload.single('image'), validations, usersController.processRegister);

module.exports = router;