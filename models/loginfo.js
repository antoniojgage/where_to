/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loginfo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    city1: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0",
      field: 'city1'
    },
    city2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0",
      field: 'city2'
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "0",
      field: 'occupation'
    }
  }, {
    tableName: 'loginfo'
  });
};
