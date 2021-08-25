const controller = {
    emptyproductCart:(req,res) => {
        res.render("emptyproductCart")
    },
    index:(req,res) => {
        res.render("index")
    },
    login:(req,res) => {
        res.render("users/login")
    },
    productCart:(req,res) => {
        res.render("productCart")
    },
    productDetail:(req,res) => {
        res.render("products/productDetail")
    },
    register:(req,res) => {
        res.render("users/register")
    },
    crearProducto:(req,res) => {
        res.render("products/crearProducto")
    },
    editarProducto:(req,res) => {
        res.render("products/editarProducto")
    }
};

module.exports= controller;