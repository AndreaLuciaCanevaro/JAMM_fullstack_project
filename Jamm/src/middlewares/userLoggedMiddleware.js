const User = require('../models/usersModels');

function userLoggedMiddleware (req, res, next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findByField('email' , emailInCookie);
    // console.log(emailInCookie);

    if (userFromCookie){
        req.session.userLogged = userFromCookie;
    }
// req.session?.userLogged es igual a hacer req.session && req.session.userLogged
    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
};

module.exports = userLoggedMiddleware;