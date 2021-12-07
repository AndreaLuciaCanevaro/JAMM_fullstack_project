const db = require('../../../database/models');
const sequelize = db.sequelize;
const Users = db.User;


const usersAPIController = {
    'list': (req, res) => {
        db.Users.findAll({
            attributes: ["id", "fullName", "email"]
        })
            .then(user => {
                for  (let i = 0;i<user.length;i++){
                    user[i].setDataValue("url","http://localhost:3010/api/users/" + user[i].id)
                  }
                let respuesta = {
                    meta: {
                        status : 200,
                        total: user.length,
/*                         url: "http://localhost:3010/api/users/" + user.image,

 */                        },
                        data: user
                        }
                    res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Users.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "http://localhost:3010/api/users/" + user.id,
                    },
                    id: user.id,
                    userName: user.fullName,
                    email: user.email,
                    profilePic: "http://localhost:3010/images/users/" + user.image,  
                    created: user.created_at,
                    modified: user.modified_at,
                    deleted: user.deleted_at,
                   // data: user      //esto te trate todos los datos del usuario juntos.
                }
                res.json(respuesta);
            });
    },

}

module.exports = usersAPIController;