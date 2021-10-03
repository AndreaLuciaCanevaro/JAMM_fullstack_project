const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersDataBase = require ('../data/usersDataBase.json');

const usersController = {
    login:(req,res) => {
        res.render("users/login")
    },
    register:(req,res) => {
        res.render("users/register")
    },
    processLogin:function(req,res){
        let errors=validationResult(req);
        if(errors.isEmpty()){
            let usersJson=fs.readFileSync('usersDataBase.json',{errors:errors.errors});
            let users;
            if(usersJson==""){
                users=[];
            }else{
                users=JSON.parse(usersJSON);
            }
            let usuarioALoguearse=users[i];
            for(let i=0;i<users.length;i++){
                if(users[i].email==req.body.email){
                    if(bcrypt.compareSync(req.body.password,users[i].password));
                    break;
                }
            }
        }
        if(usuarioALoguearse==undefined){
            return res.render ('login', {errors:[
                {msg:'Credenciales inválidas'}
            ]});
//        }
        req.session.usuarioLogueado=usuarioALoguearse;
        res.render('Success');
    }else{
        return res.render('login',{errors:errors.errors});
    }
}
}
module.exports= usersController;