const db = require("../models");
const Cuentajpm = db.cuentajpm;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo enlace
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.banco || !req.body.sucursal || !req.body.cuenta) {
        res.status(400).send({
            message: "¡El contenido de la solicitud de creación no puede estar vacío!"
        });
        return;
    }

    // Crear un nuevo enlace
    const cuentajpm = {
        banco: req.body.banco,
        sucursal: req.body.sucursal,
        cuenta: req.body.cuenta
    };

    // Gardar el enlace en la base de datos
    Cuentajpm.create(cuentajpm)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al intentar guardar una nueva cuenta bancaria de JPM."
            });
        });
};

// Obtener todos los enlaces en la base de datos o filtrados por cuenta
exports.findAll = (req, res) => {
    const cuenta = req.query.cuenta;
    var condition = cuenta ? { cuenta: { [Op.like]: `%${cuenta}%` } } : null;

    Cuentajpm.findAll({
        where: condition
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al intentar obtener las cuentas de JPM."
            });
        });
};

// Encontrar un único enlace por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cuentajpm.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al intentar obtener la cuenta de JPM con ID = " + id + "."
            });
        });
};

// Actualizar un enlace por su ID en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Cuentajpm.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cuenta bancaria de JPM actualizada satisfactoriamente!"
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la cuenta bancaria de JPM con ID = ${id}. !Puede ser que no exista en la base de datos o que la solicitud esté vacía!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error intentando actualizar la cuenta bancaria de JPM con ID = " + id
            });
        });
};

// Eliminar un enlace por su ID en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Cuentajpm.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Cuenta bancaria de JPM eliminada satisfactoriamente!"
                });
            } else {
                res.send({
                    message: `¡No se pudo eliminar la cuenta bancaria de JPM con ID = ${id}. Puede ser que no se encuentre en la base de datos!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar la cuenta bancaria de JPM con ID = " + id
            });
        });
};

// Eliminar todos los enlaces existentes en la base de datos
exports.deleteAll = (req, res) => {
    Cuentajpm.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `¡${nums} cuentas bancarias de JPM han sido eliminadas satisfactoriamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "¡Ha ocurrido en error mientras se intentaban eliminar todas las cuentas bancarias de JPM!"
            });
        });
};

// Obtener todos los enlaces por fecha de creación
// exports.findAllCreatedAt = (req, res) => {

// };