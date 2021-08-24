const controller = {
    emptyproductCart:(req,res) => {
        res.render("emptyproductCart")
    },
    index:(req,res) => {
        res.render("index")
    },
    login:(req,res) => {
        res.render("login")
    },
    productCart:(req,res) => {
        res.render("productCart")
    },
    productDetail:(req,res) => {
        res.render("productDetail")
    },
    register:(req,res) => {
        res.render("register")
    },
    crearProducto:(req,res) => {
        res.render("crearProducto")
    },
    editarProducto:(req,res) => {
        res.render("editarProducto")
    }
};

module.exports= controller;