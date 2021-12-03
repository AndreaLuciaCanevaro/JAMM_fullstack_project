const fs = require('fs');
const path = require('path');
//const User = require('../models/usersModels'); // esta creo que ya no va
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../../database/models');

const sequelize = db.sequelize; //?

/* Lista de usuarios .JSON */
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    login:(req,res) => {
        let title = 'Logueate';
        res.render("users/login", {title: title});
    },

    loginProcess: (req, res) => {
        let errors = validationResult(req)
        if (errors.errors.length > 0) {
            return res.render('users/login', {
                errors: errors.mapped()
            })
        }
        db.Users.findAll()
            .then(users => {
                let userToLogin = users.find(i =>
                    i.email == req.body.email
                )
                if (userToLogin) {
                    let loginUser = bcrypt.compareSync(req.body.password, userToLogin.password)

                    if (loginUser) { //Eliminamos la clave y paso los datos al session
                        delete userToLogin.password
                        req.session.userLogged = userToLogin

                        if (req.body.recordarUsuario) {
                            res.cookie("userEmail", req.body.email, {
                                maxAge: 60000
                            })
                        }
                        res.redirect("/users/userProfile")
                    }
                    return res.render('users/login', {
                        errors: {
                            password: {
                                msg: "Credenciales inválidas"
                            }
                        }
                    })
                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: "Email no encontrado"
                        }
                    }
                })
            })

    },

    register:(req,res) => {
        let title= 'Registrate';
        res.render("users/register", {title: title});
    },
    
    processRegister: (req, res) => {
        let resVal = validationResult(req);

        if (resVal.errors.length > 0) {
            return res.render("users/register", {
                old: req.body,
                errors: resVal.mapped()
            })
        }

        //if (req.body.password != req.body.confirmation) {     // si agregamos confirmacion de contraseña
        //    return res.render("users/register", {
        //        old: req.body,
        //        errors: {
        //            password: {
        //                msg: "Las contraseñas no coinciden"
        //            }
        //        }
        //    })
        //}
        db.Users.create({
                fullName: req.body.fullName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename,
            })
            .then(() => {
       /*          req.session.userLogged = userToLogin;
                res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 * 60 })
     */
                res.redirect('/users/userProfile'); 
            })
            .catch((error) => {
                console.log(error);
            });
    },

    profile: (req, res) => {
    return res.render ('users/userProfile',{
    user: req.session.userLogged
    });


   // profile: (req, res) => { 
   //     db.Users.findByPk(req.session.userLogged.id)
   //       .then((user) => {
    //        res.render('users/userProfile', {
     //     user: user,
      //  });
//})



    },

    logout: (req,res) => {
        //res.clearCookie ('userEmail');
      //  console.log(req.session);
        req.session.destroy();
        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 0 })
        return res.redirect ('/');
    },
    edit: (req, res) => {
        let title = 'Editar Usuario';

        db.Users.findOne({
            where: {
                email: req.session.userLogged.email
            }
            }).then(function(profileToEdit){

       res.render('users/userEdit', {profileToEdit: profileToEdit});
    });
    },


// Esto es lo que yo tenia
 //       db.Users.findByPk(req.session.userLogged.id)
 //         .then(function (profileToEdit) {
  //        res.render('users/userEdit', { profileToEdit: profileToEdit })
  //      })
   //   },

      update: (req, res) => {
        let id = req.session.userLogged.id;
        
        db.Users.update({
            fullName: req.body.fullName, 
            email: req.body.email,     
            image: req.file?.filename ? req.file.filename : undefined,   
        //    category: req.session.userLogged.category,    
        //    password: req.session.userLogged.password,
                    
        }, {
            where: {
                email: req.body.email
            }
        })
        .then(() => {                
            res.redirect("/users/userProfile");            
        })            
        .catch(error => console.log(error))
    },
};


module.exports= usersController;