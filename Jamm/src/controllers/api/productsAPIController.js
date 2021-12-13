const db = require('../../../database/models');
const sequelize = db.sequelize;
const Products = db.Product;


const productsAPIController = {
    'list': (req, res) => {
        db.Products.findAll({
            attributes: ["id", "category_id", "productName", "image", "description", "price", "color"],
            include: ["category"],

        })
            .then(product => {
                
                let categoryGaming = 0;
                let categoryAccesorios = 0;
                let categoryDispositivos = 0;

                for  (let i = 0;i<product.length;i++){
                    product[i].setDataValue("url","http://localhost:3010/api/products/" + product[i].id)

                    if (product[i].category_id == "1") {
                        categoryGaming++
                    } if (product[i].category_id == "2") {
                        categoryAccesorios++
                    } if (product[i].category_id == "3") {
                        categoryDispositivos++
                    }
                }
                  
                let respuesta = {
                    meta: {
                        status : 200,
                        total: product.length,
                        totalCategories: 3 ,                
                        productsByCategory: [
                            {nombre:"Gaming", cantidad:categoryGaming},
                            {nombre:"Accesorios", cantidad:categoryAccesorios},
                            {nombre:"Dispositivos", cantidad:categoryDispositivos}
                        ]
/*                         url: "http://localhost:3010/api/product/" + product.image,

 */                        },
                    data: product,
                   
                        //findAll  y despues un forEach por cada producto que categoria tiene
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: "http://localhost:3010/api/products/" + product.id,
                    },
                    id: product.id,
                    category: product.category_id,
                    product: product.productName,
                    image: "http://localhost:3010/images/" + product.image,
                    description: product.description,
                    price: product.price, 
                    created: product.created_at,
                    modified: product.modified_at,
                    deleted: product.deleted_at,
                   // data: product      //esto te trate todos los datos del usuario juntos.
                }
                res.json(respuesta);
            });
    },

}

module.exports =productsAPIController;