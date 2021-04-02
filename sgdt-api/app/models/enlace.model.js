module.exports = (sequelize, Sequelize) => {
    const Enlace = sequelize.define("enlace", {
        titulo: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
    });

    return Enlace;
};