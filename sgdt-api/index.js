const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Inicializar sequelize
const db = require("./app/models");

db.sequelize.sync();

// const db = require("./app/models");
// const Role = db.role;

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Vaciando y sincronizando la base de datos.');
//   initial();
// });

// function initial() {
//   Role.create({
//     id: 1,
//     nombre: "usuario"
//   });
 
//   Role.create({
//     id: 2,
//     nombre: "moderador"
//   });
 
//   Role.create({
//     id: 3,
//     nombre: "administrador"
//   });
// }

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API Rest de la Dirección de Tesorería de la Jefatura de Policía de Montevideo." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require("./app/routes/enlace.routes")(app);
require("./app/routes/cuentajpm.routes")(app);
require("./app/routes/cheque.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor está activo en el puerto ${PORT}.`);
});