module.exports = function (sequelize, dataTypes) {
    let alias = "Brands"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brandName: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATETIME
        },
        modified_at: {
            type: dataTypes.DATETIME
        },
        deleted_at: {
            type: dataTypes.DATETIME
        }
    }
    let config = {
        tableName: "Brands",
        timestamps: true  // aca ira true? porque las tengo creadas
    }
    let Brand = sequelize.define(alias, cols, config);
    Brand.associate = function(models) {        // como se relacionan las tablas
        Brand.belongsToMany(models.products, {
            as: "products",
            through: "productsbrands",
            foreignKey: "brand_id",
            otherKey: "product_id",
            timestamps: true
        });
    } 
    return Brand;
}