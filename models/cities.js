module.exports = function(sequelize, DataTypes) {

    var Cities = sequelize.define("Cities", {
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        latitude: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        longitude: {
            type: DataTypes.DECIMAL(10, 4),
            allowNull: false
        },
        growth_from_2000_2013: {
            type: DataTypes.STRING,
            allowNull: false
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Cities;
};

