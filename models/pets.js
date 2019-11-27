//table for database with the ISO post for jobs

module.exports = function(sequelize, DataTypes) {
  var Pet= sequelize.define("Pet", {
    jobTitle: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    serviceQualification: DataTypes.BOOLEAN,
    animalType: DataTypes.STRING,
    location: DataTypes.STRING, 
    description: DataTypes.TEXT
  });
  return Pet;
};
