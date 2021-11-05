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
        tableName: "categories",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "modified_at",
        deletedAt: "deleted_at",
        paranoid: true
    }
    let Category = sequelize.define(alias, cols, config);
    Category.associate = function(models) {        // como se relacionan las tablas
        Category.hasMany(models.Products, {
            as: "products",
            foreignKey: "category_id"
        });
    } 
    return Category;
}