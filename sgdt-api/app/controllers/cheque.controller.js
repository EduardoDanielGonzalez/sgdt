const db = require("../models");
const Cheque = db.cheque;
const Cuentajpm = db.cuentajpm;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo registro
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.serie || !req.body.numero || !req.body.ingreso) {
        res.status(400).send({
            message: "¡El contenido de la solicitud de creación no puede estar vacío!"
        });
        return;
    }

    // Crear un nuevo registro
    const cheque = {
        serie: req.body.serie,
        numero: req.body.numero,
        ingreso: req.body.ingreso
    };

    // Gardar el registro en la base de datos
    Cheque.create(cheque)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al intentar guardar el nuevo registro en la base de datos."
            });
        });
};

// Obtener todos los registros en la base de datos o filtrados por un campo
exports.findAll = (req, res) => {

    limitePredeterminado = 25;
    
    const numero = req.query.numero;
    var condition = numero ? { numero: { [Op.like]: `%${numero}%` } } : null;

    const pagina = req.query.pagina;
    var limite = pagina && pagina > 0 ? [pagina * limitePredeterminado, limitePredeterminado] : [0, limitePredeterminado];

    Cheque.findAll({
        where: condition,
        limit: limite,
        include: [
            { model:Cuentajpm,
              attributes: ['id', 'banco', 'sucursal', 'cuenta']
            },
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al intentar obtener los registros de la base de datos."
            });
        });
};

// Encontrar un único enlace por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cheque.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al intentar obtener de la base de datos el registro con ID = " + id + "."
            });
        });
};

// Actualizar un enlace por su ID en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Cheque.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro actualizado satisfactoriamente en la base de datos!"
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el registro con ID = ${id}. !Puede ser que no exista en la base de datos o que la solicitud esté vacía!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error intentando actualizar en la base de datos el registro con ID = " + id
            });
        });
};

// Eliminar un registro por su ID en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Cheque.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Registro eliminado satisfactoriamente de la base de datos!"
                });
            } else {
                res.send({
                    message: `¡No se pudo eliminar el registgro con ID = ${id}. Puede ser que no se encuentre en la base de datos!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar de la base de datos el registro con ID = " + id
            });
        });
};

// Eliminar todos los registros existentes en la base de datos
exports.deleteAll = (req, res) => {
    Cheque.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `¡${nums} registros de la base de datos han sido eliminadas satisfactoriamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "¡Ha ocurrido en error mientras se intentaban eliminar todos los registros de la base de datos!"
            });
        });
};
