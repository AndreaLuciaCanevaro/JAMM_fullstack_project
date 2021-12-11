const authAdmin = function (req, res, next) {
    if (req.session.userLogged && req.session.userLogged.category == 'admin') {

    } else {
        /* alert("No tiene acceso como administrador") */
        return res.redirect("/")
    }

    next()
}

module.exports = authAdmin;