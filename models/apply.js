//table where applicants info will be stored 
module.exports = function (sequelize, DataTypes) {
  var PetApp = sequelize.define("PetApp",
    {
      name: {
        type: DataTypes.STRING
      },
      ownerName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      serviceQualification: {

        type: DataTypes.BOOLEAN
      },
      animalType: {
        type: DataTypes.STRING
      },
      description: {

        type: DataTypes.TEXT
      }
  

    });
  return PetApp;
};

