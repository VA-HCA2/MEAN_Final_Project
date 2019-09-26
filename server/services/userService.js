
const User = require("../db/connection").Users;

var userService = {};

userService.list = () => {
    return User.findAll( {where:{ is_admin:"0"}})
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};


userService.listUser = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.register = (userObj) => {
    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.update = (userId, userObj) => {
    return User.update(userObj, {returning: true, where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.delete = (userId) => {
    return User.destroy({ where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};


userService.login =(userObj) => {
    return User.findOne({
            where: {
                username: userObj.username,
                password: userObj.password
            } })
            .then(user => {
                userService.logUser=user;
                return user;
            })
            .catch(error => {
                throw error;
            }); 
        
} 


module.exports = userService;