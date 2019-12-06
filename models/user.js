const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes){
    const User = sequelize.define(
        "user",
        {
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        },
        {
            underscored: true,
            freezeTableName: true
        }
    );

    User.validPassword = function(inputPwd, dbPwd){
        return bycrypt.compareSync(inputPwd, dbPwd);
    };   
   
return User;

};