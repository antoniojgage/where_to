/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jointTableOne', {
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'city'
    },
    stateInitial: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'stateInitial'
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'state'
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
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: 'longitude'
    }
  }, {
    tableName: 'joint_table_one'
  });
};
