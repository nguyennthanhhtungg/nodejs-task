
module.exports = (sequelize, Sequelize) => {
    const extraFee = sequelize.define('ExtraFee',{
        extraFeeId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fromHour: {
            type: Sequelize.INTEGER
        },
        fromMinute: {
            type: Sequelize.INTEGER
        },
        toHour: {
            type: Sequelize.INTEGER
        },
        toMinute: {
            type: Sequelize.INTEGER
        },
        extraDeliveryFee: {
            type: Sequelize.DOUBLE
        }
    })
    return extraFee;
};
