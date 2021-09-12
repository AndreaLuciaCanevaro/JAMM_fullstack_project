const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");

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
    },
	store: (req, res) => {
		if (req.file) {
			let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
			let newProduct = {
				id: Date.now(),
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				category: req.body.category,
				description: req.body.description,
				image: req.file.filename
			};
			products.push(newProduct);
			let productsJSON = JSON.stringify(products);
			fs.writeFileSync(productsFilePath, productsJSON);
			res.redirect('/productos'); 
		} else {
			res.render('crearProducto');
            
		}
	},

};

module.exports= controller;