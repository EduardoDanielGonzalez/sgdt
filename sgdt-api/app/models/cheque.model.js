module.exports = (sequelize, Sequelize) => {
    const Cheque = sequelize.define("cheque", {
        serie: {
            type: Sequelize.INTEGER
        },
        numero: {
            type: Sequelize.INTEGER
        },
        ingreso: {
            type: Sequelize.DATEONLY
        },
        doc_tipo: {
            type: Sequelize.STRING
        },
        doc_numero: {
            type: Sequelize.STRING
        },
        titular: {
            type: Sequelize.STRING
        },
        concepto: {
            type: Sequelize.STRING
        },
        monto: {
            type: Sequelize.DOUBLE
        },
        emision: {
            type: Sequelize.DATEONLY
        },
        anulado: {
            type: Sequelize.DATEONLY
        },
        motivo: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    });

    return Cheque;
};