/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wheretoDataMaster', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
      field: 'Rent Index'
    },
    costOfLivingPlusRentIndex: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Cost of Living Plus Rent Index'
    },
    groceriesIndex: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Groceries Index'
    },
    restaurantPriceIndex: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Restaurant Price Index'
    },
    localPurchasingPowerIndex: {
      type: "DOUBLE",
      allowNull: true,
      field: 'Local Purchasing Power Index'
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
    areaName3: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'AREA_NAME_3'
    },
    areaName4: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'AREA_NAME_4'
    },
    area: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'AREA'
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
    occGroup: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'OCC_GROUP'
    },
    totEmp: {
      type: DataTypes.TEXT,
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
      field: 'LOC QUOTIENT'
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
    meanPrse: {
      type: "DOUBLE",
      allowNull: true,
      field: 'MEAN_PRSE'
    },
    hPct10: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'H_PCT10'
    },
    hPct25: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'H_PCT25'
    },
    hMedian: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'H_MEDIAN'
    },
    hPct75: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'H_PCT75'
    },
    hPct90: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'H_PCT90'
    },
    aPct10: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'A_PCT10'
    },
    aPct25: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'A_PCT25'
    },
    aMedian: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'A_MEDIAN'
    },
    aPct75: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'A_PCT75'
    },
    aPct90: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'A_PCT90'
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
    tableName: 'whereto_data_master'
  });
};
