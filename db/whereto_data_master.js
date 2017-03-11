/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wheretoDataMaster', {
    id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    primState: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: true,
      field: 'AREA_NAME_1'
    },
    areaName2: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'AREA_NAME2'
    },
    areaName3: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'AREA_NAME_3'
    },
    areaName4: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'AREA_NAME_4'
    },
    area: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'AREA'
    },
    areaName: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'AREA_NAME'
    },
    occCode: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'OCC_CODE'
    },
    occTitle: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'OCC_TITLE'
    },
    occGroup: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'OCC_GROUP'
    },
    totEmp: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'TOT_EMP'
    },
    empPrse: {
      type: "DOUBLE",
      allowNull: true,
      field: 'EMP_PRSE'
    },
    jobs1000: {
      type: "DOUBLE",
      allowNull: true,
      field: 'JOBS_1000'
    },
    locQuotient: {
      type: "DOUBLE",
      allowNull: true,
      field: 'LOC_QUOTIENT'
    },
    hMean: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'H_MEAN'
    },
    aMean: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'A_MEAN'
    },
    meanPrse: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MEAN_PRSE'
    },
    hPct10: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'H_PCT10'
    },
    hPct25: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'H_PCT25'
    },
    hMedian: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'H_MEDIAN'
    },
    hPct75: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'H_PCT75'
    },
    hPct90: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'H_PCT90'
    },
    aPct10: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'A_PCT10'
    },
    aPct25: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'A_PCT25'
    },
    aMedian: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'A_MEDIAN'
    },
    aPct75: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'A_PCT75'
    },
    aPct90: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'A_PCT90'
    },
    annual: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'ANNUAL'
    },
    hourly: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'HOURLY'
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
    stateInitial: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'stateInitial'
    }
  }, {
    tableName: 'whereto_data_master'
  });
};
