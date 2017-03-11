/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testImageLink', {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'city'
    },
    imageLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'imageLink'
    }
  }, {
    tableName: 'test_image_link'
  });
};
