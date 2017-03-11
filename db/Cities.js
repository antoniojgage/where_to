/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'city'
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'rank'
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'latitude'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'state'
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'longitude'
    },
    growthFrom20002013: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'growth_from_2000_2013'
    },
    population: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'population'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'createdAt'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt'
    }
  }, {
    tableName: 'Cities'
  });
};
