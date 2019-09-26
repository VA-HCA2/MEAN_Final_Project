module.exports = function(sequelize, DataTypes) {
    return sequelize.define('USER', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(25),
            unique: true,
            allowNull: false
        },

        is_admin:{
            type: DataTypes.INTEGER(1),
            defaultValue:0
        },

        password: {
            type: DataTypes.STRING(25),
            allowNull: false
        },

    }, {
        tableName: 'USER'
    });
};