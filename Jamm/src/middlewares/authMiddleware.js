//Ver si el usuario está logueado en session y redirect a vista users/login
//Si no está logueado, next()
function authMiddleware (req, res, next) {
    if (!req.session.userLogged){
        return res.redirect ('/users/login')
    }
    next();
};

module.exports= authMiddleware;