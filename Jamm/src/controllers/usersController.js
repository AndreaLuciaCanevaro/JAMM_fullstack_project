const fs = require('fs');
const path = require('path');
const User = require('../models/UsersModels');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const usersDataBase = require ('../data/usersDataBase.json');

const usersController = {
    login:(req,res) => {
        let title = 'Logueate';
        res.render("users/login", {title: title});
    },
    processLogin: (req, res) => {
        let title = 'Logueate';
        let userToLogin = User.findByField('email',req.body.email);
        if(userToLogin) {
        //let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password); //Para comparar usando encriptacion
        let correctPassword = (req.body.password == userToLogin.password) ? true : false; //Compara sin encriptar, VER
        
        if (correctPassword) {
            delete userToLogin.password;
            req.session.userLogged = userToLogin;
            //Recordarme:
            if(req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })//crea una cookie y la guarda por: un minuto X 60 = una hora
            };
            return res.redirect('/users/userProfile');
    }
            return res.render('users/login', {title: title,
                errors: {
                    email: {
                        msg: 'Las credenciales son inválidas'
                    }
                }
            });
        }
        //si no se encuentra el usuario en la base de datos
        return res.render('users/login', {title: title,
            errors: {
                email: {
                    msg: 'Este email no se encuentra registrado'
                }
            }
        });
},
    register:(req,res) => {
        let title= 'Registrate';
        res.render("users/register", {title: title});
    },
    processRegister: (req, res) => {
        let title= 'Registrate';
        let validationsResult = validationResult(req);
        
        if (validationsResult.errors.length > 0) {
            return res.render('users/register' , { title: title, errors: validationsResult.mapped(), oldData: req.body})
        }
        let userInDB = User.findByField('email', req.body.email);
		if (userInDB) {
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}
		let userToCreate = {
			...req.body, //spread operator
			password: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename
		}

		let userCreated = User.create(userToCreate);
		return res.redirect('/users/login');
    },

    profile: (req, res) => {
        return res.render ('userProfile');
        user: req.session.userLogged
    },

    logout: (req,res) => {
        req.session.destroy();
        return res.redirect ('/');
    }
};


module.exports= usersController;