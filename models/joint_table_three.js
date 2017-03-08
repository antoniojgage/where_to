/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('jointTableThree', {
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
		},
		id: {
			type: DataTypes.INTEGER(6),
			allowNull: true,
			defaultValue: "0",
			field: 'ID'
		},
		primState: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'PRIM_STATE'
		},
		cpi: {
			type: "DOUBLE",
			allowNull: true,
			field: 'CPI'
		},
		bang4Yabuk: {
			type: "DOUBLE",
			allowNull: true,
			field: 'BANG4YABUK'
		},
		rentIndex: {
			type: "DOUBLE",
			allowNull: true,
			field: 'Rent_Index'
		},
		costOfLivingPlusRentIndex: {
			type: "DOUBLE",
			allowNull: true,
			field: 'Cost_of_Living_Plus_Rent_Index'
		},
		groceriesIndex: {
			type: "DOUBLE",
			allowNull: true,
			field: 'Groceries_Index'
		},
		restaurantPriceIndex: {
			type: "DOUBLE",
			allowNull: true,
			field: 'Restaurant_Price_Index'
		},
		localPurchasingPowerIndex: {
			type: "DOUBLE",
			allowNull: true,
			field: 'Local_Purchasing_Power_Index'
		},
		areaName1: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'AREA_NAME_1'
		},
		areaName2: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'AREA_NAME2'
		},
		areaName: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'AREA_NAME'
		},
		occCode: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'OCC_CODE'
		},
		occTitle: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'OCC_TITLE'
		},
		totEmp: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'TOT_EMP'
		},
		hMean: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'H_MEAN'
		},
		aMean: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'A_MEAN'
		},
		hMedian: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'H_MEDIAN'
		},
		aMedian: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'A_MEDIAN'
		},
		annual: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'ANNUAL'
		},
		hourly: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'HOURLY'
		}
	}, {
		tableName: 'joint_table_three'
	});
};
