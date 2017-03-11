/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logTable', {
    id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    occuptation: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'Occuptation'
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
    },
    city1: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'City1'
    },
    city2: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'City2'
    }
  }, {
    tableName: 'log_table'
  });
};
