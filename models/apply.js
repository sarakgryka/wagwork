//table where applicants info will be stored 
module.exports = function(sequelize, DataTypes) {
    var PetApp= sequelize.define("Pet", {
      name: DataTypes.STRING,
      ownerName: DataTypes.STRING,
      email: DataTypes.STRING,
      serviceQualification: DataTypes.BOOLEAN,
      animalType: DataTypes.STRING,
      description: DataTypes.TEXT
    });
    return PetApp;
  };
  