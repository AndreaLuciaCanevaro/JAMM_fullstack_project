const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");

const controller = {
    allProducts: (req,res) => {
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("products/products", { products : products, toThousand: toThousand });  
    },
    productDetail:(req,res) => {
        let idProduct = parseInt(req.params.id);
        let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let product = products.filter (i => i.id === idProduct);
        res.render("products/productDetail", { products : product, toThousand: toThousand, dotToComma: dotToComma });
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
    
	store: (req, res) => {
		if (req.file) {
			let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
			let newProduct = {
				id: Date.now(),
				name: req.body.nombreproducto,
				price: req.body.precio,
				//discount: req.body.discount,
				category: req.body.categoria,
				description: req.body.descripcion,
                color: req.body.color,
				image: req.file.filename
			};
			products.push(newProduct);
			let productsJSON = JSON.stringify(products);
			fs.writeFileSync(productsFilePath, productsJSON);
			res.redirect('/products'); 
		} else {
			res.render('products/crearProducto');
            
		}
	},

    
// Update - Form to edit

edit: (req, res) => {
    let idProduct = parseInt(req.params.id);
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    let productToEdit = products.filter(i => i.id === idProduct);
    res.render('products/edit', {productToEdit: productToEdit,
        toThousand: toThousand}); 
},
// Update - Method to update
update: (req, res) => {
    let idProduct = parseInt(req.params.id);
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    products.forEach(product => {
        if(product.id === idProduct) {
            product.name = req.body.nombreproducto;
            product.price = req.body.precio;
            //product.discount = req.body.discount;
            product.category = req.body.categoria;
            product.description = req.body.descripcion;
            product.color = req.body.color;
				
            if (req.file) {
                let indexProduct = products.findIndex(product => product.id === idProduct);
                let imagePath = path.join(__dirname, '../../public/images', products[indexProduct].image);
                fs.unlink(imagePath, function (err) {
                    if (err) throw err;
                });
                product.image = req.file.filename;
            }
        }
    });
    let productsJSON = JSON.stringify(products, null, ' ');
    fs.writeFileSync(productsFilePath, productsJSON);
    res.redirect('/products');
},

// Delete - Delete one product from DB
destroy : (req, res) => {
    let idProduct = parseInt(req.params.id);
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    let indexProduct = products.findIndex(product => product.id === idProduct);
    let imagePath = path.join(__dirname, '../../public/images', products[indexProduct].image);
    fs.unlink(imagePath, function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });
    let productsUpdated = products.filter(i => i.id !== idProduct);
    let productsUpdatedJSON = JSON.stringify(productsUpdated, null, ' ');
    fs.writeFileSync(productsFilePath, productsUpdatedJSON);
    res.redirect('/products');
}
};

module.exports= controller;