/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tableWithEverything', {
		city: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'city'
		},
		imageLink: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'imageLink'
		},
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'ID'
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
		createdAt: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'createdAt'
		},
		updatedAt: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'updatedAt'
		},
		longitude: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'longitude'
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
		tableName: 'table_with_everything'
	});
};
