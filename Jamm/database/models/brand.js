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
        tableName: "brands",
        timestamps: true,  // aca ira true? porque las tengo creadas
        createdAt: "created_at",
        updatedAt: "modified_at",
        deletedAt: "deleted_at",
        paranoid: true
    }
    let Brand = sequelize.define(alias, cols, config);
    Brand.associate = function(models) {        // como se relacionan las tablas
        Brand.belongsToMany(models.Products, {
            as: "products",
            through: "productsbrands",
            foreignKey: "brand_id",
            otherKey: "product_id",
            timestamps: true
        });
    } 
    return Brand;
}