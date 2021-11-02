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
        tableName: "Users",
        timestamps: true  // aca ira true? porque las tengo creadas
    }
    let User = sequelize.define(alias, cols, config);
    User.associate = function(models) {        // como se relacionan las tablas
        User.belongsToMany(models.products, {
            as: "products",
            through: "usersproducts",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: true
        });
    } 
    return User;
}