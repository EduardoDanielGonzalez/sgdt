const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },

    logging: 0
  }
);

// Probar la conección de Sequelize
(async () => {
  try {
      await sequelize.authenticate();
      console.log('La conexión con la base de datos se ha establecido correctamente.');
  } catch (error) {
      console.error('No ha sido posible conectar con la base de datos debido a:', error);
  }
})();

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["usuario", "administrador", "moderador"];

db.enlace = require("./enlace.model.js")(sequelize, Sequelize);

db.cheque = require("./cheque.model.js")(sequelize, Sequelize);
db.cuentajpm = require("./cuentajpm.model.js")(sequelize, Sequelize);

db.cheque.belongsToMany(db.cuentajpm, {
  through: "cheques_cuentajpms",
  foreignKey: "chequeId",
  otherKey: "cuentajpmId"
});
db.cuentajpm.belongsToMany(db.cheque, {
  through: "cheques_cuentajpms",
  foreignKey: "cuentajpmId",
  otherKey: "chequeId"
});

module.exports = db;