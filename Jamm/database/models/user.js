module.exports = function (sequelize, dataTypes) {
    let alias = "Users"; 
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fullName: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false
        },
        category: {
            type: dataTypes.TINYINT,
            allowNull: true
        
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
        tableName: "users",
        timestamps: true,  // aca ira true? porque las tengo creadas
        createdAt: "created_at",
        updatedAt: "modified_at",
        deletedAt: "deleted_at",
        paranoid: true
    }
    let User = sequelize.define(alias, cols, config);
    User.associate = function(models) {        // como se relacionan las tablas
        User.belongsToMany(models.Products, {
            as: "products",
            through: "usersproducts",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: true
        });
    } 
    return User;
}