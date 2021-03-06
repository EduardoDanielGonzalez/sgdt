const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    nombreusuario: req.body.nombreusuario,
    email: req.body.email,
    clave: bcrypt.hashSync(req.body.clave, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            nombre: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "El usuario se registró satisfactoriamente!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "El usuario se registró correctamente!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      nombreusuario: req.body.nombreusuario
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "El usuario no fue encontrado." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.clave,
        user.clave
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Contraseña incorrecta!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].nombre.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          nombreusuario: user.nombreusuario,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};