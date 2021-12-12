const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const dotToComma = n => n.toString().replace(/\./, ",");

const db = require("../../database/models");
const sequelize = db.sequelize;


const controller = {
    crear: function (req, res) {
        db.Category.findAll()
            .then(function(category) {
                return res.render("products/crearProducto", {category: category});
            })
    },

    guardar: (req, res) => {
        
        if (req.file) {
            db.Products.create({
                productName: req.body.nombreproducto, 
                description: req.body.descripcion,     
                image: req.file.filename,   // no estoy seguro si va asi
                category_id: req.body.categoria,            
                color: req.body.color,
                price: req.body.precio         
			})                
            .then(() => {
                res.redirect("/products");
            })
            .catch((error) => {
                console.log(error);
            });		
        } else {
            res.redirect("/crearProducto");	
        }   
    },

    listar: (req,res) => {        
            let title = 'Lista de productos';        
            db.Products.findAll()
                .then(products => { 
                    res.render("products/products", {title: title, products: products});                         
                })
                .catch((error) => {
                    console.log(error);            
                });   
    },

    detalle: function(req, res) {
        db.Products.findByPk(req.params.id)
            .then(products => {                
                res.render("products/productDetail", {products:products, productId: req.params.id});
            })           
            .catch((error) => {                
                console.log(error);            
            });    
    },

    editar: (req, res) => {
        let title = 'Editar producto';
        let productRequest = db.Products.findByPk(req.params.id, {
            include: [{association: "category"}]
                });
        let categoriesRequest = db.Category.findAll();

        Promise.all([productRequest, categoriesRequest])
                    .then(([products, category]) => {
                        res.render("products/edit", {title: title, products: products, category, toThousand: toThousand, dotToComma: dotToComma});
                    })
                    .catch((error) => {
                        console.log(error);            
                    });
    },
    
    actualizar: (req, res) => {
        let id = req.params.id;
        
        db.Products.update({
            productName: req.body.nombreproducto, 
            description: req.body.descripcion,     
            image: req.file?.filename ? req.file.filename : undefined,   
            category_id: req.body.categoria,    
            color: req.body.color,
            price: req.body.precio         
        }, {
            where: {
                id: id
            }
        })
        .then(() => {                
            return res.redirect("/productDetail/" + id);            
        })            
        .catch(error => console.log(error))
    },

    borrar: function(req, res) {
        db.Products.destroy({
            where: { id: req.params.id },
            force: true,
          }) // force: true es para asegurar que se ejecute la acción
          .then(() => {
            return res.redirect("/products");
          })
          .catch((error) => res.send(error));
    },

    //allProducts: (req,res) => {
    //    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    //    res.render("products/products", { products : products, toThousand: toThousand });  
    //},
    //productDetail:(req,res) => {
    //    let idProduct = parseInt(req.params.id);
    //    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    //    let product = products.filter (i => i.id === idProduct);
    //    res.render("products/productDetail", { products : product, toThousand: toThousand, dotToComma: dotToComma });
    //},
    emptyproductCart:(req,res) => {
        res.render("emptyproductCart");
    },
    productCart:(req,res) => {
        res.render("productCart");
    },
    //crearProducto:(req,res) => {
    //    res.render("products/crearProducto");
    //},
    
	//store: (req, res) => {
	//	if (req.file) {
	//		let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	//		let newProduct = {
	//			id: Date.now(),
	//			name: req.body.nombreproducto,
	//			price: req.body.precio,
				//discount: req.body.discount,
	//			category: req.body.categoria,
	//			description: req.body.descripcion,
    //            color: req.body.color,
	//			image: req.file.filename
	//		};
	//		products.push(newProduct);
	//		let productsJSON = JSON.stringify(products);
	//		fs.writeFileSync(productsFilePath, productsJSON);
	//		res.redirect('/products'); 
	//	} else {
	//		res.render('products/crearProducto');
            
	//	}
	//},

    
// Update - Form to edit

//edit: (req, res) => {
//    let idProduct = parseInt(req.params.id);
//    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//    let productToEdit = products.filter(i => i.id === idProduct);
//    res.render('products/edit', {productToEdit: productToEdit,
//        toThousand: toThousand}); 
//},
// Update - Method to update
//update: (req, res) => {
//    let idProduct = parseInt(req.params.id);
//    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//    products.forEach(product => {
//        if(product.id === idProduct) {
//            product.name = req.body.nombreproducto;
//            product.price = req.body.precio;
            //product.discount = req.body.discount;
//            product.category = req.body.categoria;
//            product.description = req.body.descripcion;
//            product.color = req.body.color;
				
//            if (req.file) {
//                let indexProduct = products.findIndex(product => product.id === idProduct);
//                let imagePath = path.join(__dirname, '../../public/images', products[indexProduct].image);
//                fs.unlink(imagePath, function (err) {
//                    if (err) throw err;
//                });
//                product.image = req.file.filename;
//            }
//        }
//    });
//    let productsJSON = JSON.stringify(products, null, ' ');
//    fs.writeFileSync(productsFilePath, productsJSON);
//    res.redirect('/products');
//},

//// Delete - Delete one product from DB
//destroy : (req, res) => {
//    let idProduct = parseInt(req.params.id);
//    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
//    let indexProduct = products.findIndex(product => product.id === idProduct);
//    let imagePath = path.join(__dirname, '../../public/images', products[indexProduct].image);
//    fs.unlink(imagePath, function (err) {
//        if (err) throw err;
//        console.log('File deleted!');
//    });
//    let productsUpdated = products.filter(i => i.id !== idProduct);
//    let productsUpdatedJSON = JSON.stringify(productsUpdated, null, ' ');
//    fs.writeFileSync(productsFilePath, productsUpdatedJSON);
//    res.redirect('/products');
//}
};

module.exports= controller;