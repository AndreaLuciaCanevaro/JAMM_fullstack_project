module.exports = function (sequelize, dataTypes) {
    let alias = "Category"; // como sequelize llamara a nuestra tabla
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
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
        tableName: "Categories",
        timestamps: true
    }
    let Category = sequelize.define(alias, cols, config);
    Category.associate = function(models) {        // como se relacionan las tablas
        Category.hasMany(models.products, {
            as: "products",
            foreignKey: "category_id"
        });
    } 
    return Category;
}