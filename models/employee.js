
module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('Employee',{
        employeeId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        employeeName: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        avatarUrl: {
            type: Sequelize.STRING
        },
        isLocked: {
            type: Sequelize.BOOLEAN
        },
        gender: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.DATE
        },
        customerNo: {
            type: Sequelize.STRING
        },
        marriageStatus: {
            type: Sequelize.STRING
        },
        isActived: {
            type: Sequelize.BOOLEAN
        },
        title: {
            type: Sequelize.STRING
        },
        managerId: {
            type: Sequelize.INTEGER
        }
    })

    Employee.associate = (models) => {
        Employee.hasMany(models.Order, {
            as: "orders",
            foreignKey: 'orderId'
        });

        Employee.hasMany(models.Employee, {
            as: "employees",
            foreignKey: 'employeeId'
        });

        Employee.belongsTo(models.Employee, {
            as: "manager",
            foreignKey: 'managerId'
        });
    }

    return Employee;
};
