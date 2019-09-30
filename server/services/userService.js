const User = require("../db/connection").Users;
var userService = {};
// Lists users that are not admin 
userService.list = () => {
    return User.findAll( {where:{ is_admin:"0"}})
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

// Lists user by Id
userService.listUser = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// Register a User
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

 // Update email from user 
userService.update = (userId, userObj) => {
    return User.update(userObj, {returning: true, where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

// Delete User 

userService.delete = (userId) => {
    return User.destroy({ where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

// Login verification 
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