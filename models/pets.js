//table for database with the ISO post for jobs

module.exports = function(sequelize, DataTypes) {
  var Pet= sequelize.define("Pet", {
    jobTitle: {
      type:DataTypes.STRING
    },
    salary: {
      type:DataTypes.INTEGER
    },

    serviceQualification: {
      type:DataTypes.BOOLEAN
    },
    location: {
      type:DataTypes.STRING
    }, 
    description:{
      type: DataTypes.TEXT
    }
  });
//association
  Pet.associate = function(models) {
    
    Pet.belongsTo(models.user, {
      foreignKey: {
       
        // defaultValue: 1,
        allowNull: false
      
      }

    });
  };


  return Pet;



};

