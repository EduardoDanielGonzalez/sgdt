module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("usuarios", {
        nombreusuario: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        clave: {
            type: Sequelize.STRING
        }
    });

    return User;
};