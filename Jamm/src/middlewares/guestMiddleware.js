//Ver si el usuario está logueado en session y redirect a vista users/userProfile
//Si no está logueado, next()
function guestMiddleware (req, res, next) {
    if (req.session.userLogged){
        return res.redirect ('/users/userProfile')
    }
    next();
};

module.exports= guestMiddleware;