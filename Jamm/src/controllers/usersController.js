//const fs = require('fs');
const path = require('path');
const User = require('../models/userModel');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
//const usersDataBase = require ('../data/usersDataBase.json');

const usersController = {
    login:(req,res) => {
        let title = 'Ingresá';
        res.render("users/login", {title: title});
    },
    loginProcess: (req, res) => {
        let title = 'Ingresá';
        let userToLogin = User.findByField('email',req.body.email);
        //si se encuentra el mail ingresado en la base de datos
        if(userToLogin) {
           //let isOkThePassword = false;
          // return res.send(userToLogin); //esto lo uso para validar el logui me muestra el usuario ingresado que se encontro en la base....
           //let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password); //Compara usando encriptacion

         // console.log('pass del formulario: req.body.password');
          //console.log(req.body.password);
          //console.log('pass de la base: userToLogin.password');
          //console.log(userToLogin.password);
          
           let isOkThePassword = (req.body.password == userToLogin.password) ? true : false; //Compara sin encriptar (cuando este el register terminado lo cambio)
          //console.log('valor de isOkThePassword');
          // console.log(isOkThePassword);
          //si además está bien la contraseña               
        if (isOkThePassword) {
            
            /*
            delete userToLogin.password;
            req.session.userLogged = userToLogin; //guarda en sesion (del lado server) el usuario sin constraseña, la borró en la linea anterior
            //si está tidada la casilla de recordarme
            if(req.body.remember_user) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })//crea una cookie y la guarda por: un minuto X 60 = una hora
            }*/

            //LISTO ACA ESTOY LOGEADO!!!! Por el momento redirigo a la pagina principal...
            return res.redirect('/'); //Listo! esta logueado
            //res.send('usuario logueado con exito');
        }
            return res.render('users/login', {title: title,
                errors: {
                    email: {
                        msg: 'Contraseña inválida'
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
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			image: req.file.filename
		}

		let userCreated = User.create(userToCreate);
		return res.redirect('/users/login');
    }
};

    //processLogin:function(req,res){
    //    let errors=validationResult(req);
    //    if(errors.isEmpty()){
    //        let usersJson=fs.readFileSync('usersDataBase.json',{errors:errors.errors});
    //        let users;
    //        if(usersJson==""){
    //            users=[];
    //        }else{
    //            users=JSON.parse(usersJSON);
    //        }
    //        let usuarioALoguearse=users[i];
    //        for(let i=0;i<users.length;i++){
    //            if(users[i].email==req.body.email){
    //                if(bcrypt.compareSync(req.body.password,users[i].password));
    //                break;
    //            }
    //        }
    //    }
    //    if(usuarioALoguearse==undefined){
    //        return res.render ('login', {errors:[
    //            {msg:'Credenciales inválidas'}
    //        ]});
//        }
    //    req.session.usuarioLogueado=usuarioALoguearse;
    //    res.render('Success');
    //}else{
    //    return res.render('login',{errors:errors.errors});
    //}
//}
//}
module.exports= usersController;