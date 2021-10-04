function userLoggedMiddleware (req, res, next){
    console.log('Pasé por el MD de user Logged');
    let isLogged = false;

    next();
};

module.exports = userLoggedMiddleware;