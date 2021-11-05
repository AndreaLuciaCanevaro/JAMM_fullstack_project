module.exports = function (sequelize, dataTypes) {
    let alias = "Products"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
            foreignKey: true
        },
        productName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING,        
        },
        price: {
            type: dataTypes.INTEGER,        
        },
        color: {
            type: dataTypes.STRING,        
        },
        created_at: {
            type: dataTypes.DATE
        },
        modified_at: {
            type: dataTypes.DATE
        },
        deleted_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "products",
        timestamps: true,  // aca ira true? porque las tengo creadas
        createdAt: "created_at",
        updatedAt: "modified_at",
        deletedAt: "deleted_at",
        paranoid: true
    }
    let Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {        // como se relacionan las tablas
        Product.belongsToMany(models.Users, {
            as: "users",
            through: "usersproducts",
            foreignKey: "product_id",
            otherKey: "user_id",
            timestamps: true
        });
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category_id"
        });
        Product.belongsToMany(models.Brands, {
            as: "brands",
            through: "productsbrands",
            foreignKey: "product_id",
            otherKey: "brand_id",
            timestamps: true
        });

    } 
    return Product;
}