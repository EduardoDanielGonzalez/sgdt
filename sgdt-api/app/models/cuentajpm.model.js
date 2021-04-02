module.exports = (sequelize, Sequelize) => {
    const Cuentajpm = sequelize.define("cuentajpm", {
        banco: {
            type: Sequelize.STRING
        },
        sucursal: {
            type: Sequelize.STRING
        },
        cuenta: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    });

    return Cuentajpm;
};