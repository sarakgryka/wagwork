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
      description: {

        type: DataTypes.TEXT
      }
      // jobId : {

      //   type:DataTypes.STRING
      // }
  

    });
  return PetApp;
};

