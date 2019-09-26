const Sequelize = require("sequelize");

const sequelize = new Sequelize("hca", "hca", "password", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const Users = sequelize.import("../models/User");

sequelize.authenticate().then(() => {
    console.log("connected");
});

module.exports = {
    Sequelize,
    sequelize,
    Users
};