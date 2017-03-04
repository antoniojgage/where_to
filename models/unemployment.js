/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('unemployment', {
		state: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
			field: 'state'
		},
		unemploymentRate2016: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			field: 'unemployment_rate_2016'
		},
		employmentRank: {
			type: DataTypes.INTEGER(2),
			allowNull: false,
			field: 'employment_rank'
		}
	}, {
		tableName: 'unemployment'
	});
};
