const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    allProducts: (req,res) => {
        res.render("products/productos", { productos : products });  
    },
    productDetail:(req,res) => {
        let idProduct = parseInt(req.params.id);
        let product = products.filter (i => i.id === idProduct);
        res.render("products/productDetail", { producto : product });
    },
    emptyproductCart:(req,res) => {
        res.render("emptyproductCart");
    },
    productCart:(req,res) => {
        res.render("productCart");
    },
    crearProducto:(req,res) => {
        res.render("products/crearProducto");
    },
    editarProducto:(req,res) => {
        res.render("products/editarProducto");
    }
};

module.exports= controller;