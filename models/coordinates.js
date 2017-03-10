/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coordinates', {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'city'
    },
    growthFrom2000To2003: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'growth_from_2000_to_2003'
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'latitude'
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'longitude'
    },
    population: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'population'
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'rank'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'state'
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
    tableName: 'coordinates'
  });
};
