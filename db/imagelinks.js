/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('imagelinks', {
    city: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'city'
    },
    imageLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'imageLink'
    }
  }, {
    tableName: 'imagelinks'
  });
};
