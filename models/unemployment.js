/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unemployment', {
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      field: 'state'
    },
    stateInitial: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'stateInitial'
    },
    unemploymentRate2016: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'unemploymentRate_2016'
    },
    employmentRate: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'employmentRate'
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'updatedAt'
    }
  }, {
    tableName: 'unemployment'
  });
};
