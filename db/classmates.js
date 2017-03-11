/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('classmates', {
    id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'lastName'
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'firstName'
    }
  }, {
    tableName: 'classmates'
  });
};
