const db = require("../models");
const Enlace = db.enlace;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo enlace
exports.create = (req, res) => {
    // Validar la solicitud
    if (!req.body.titulo || !req.body.url) {
        res.status(400).send({
            message: "¡El contenido de la solicitud de creación no puede estar vacío!"
        });
        return;
    }

    // Crear un nuevo enlace
    const enlace = {
        titulo: req.body.titulo,
        url: req.body.url
    };

    // Gardar el enlace en la base de datos
    Enlace.create(enlace)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al intentar guardar un nuevo enlace."
            });
        });
};

// Obtener todos los enlaces en la base de datos o filtrados por título
exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { [Op.like]: `%${titulo}%` } } : null;

    Enlace.findAll({
        where: condition,
        order: [
            ['titulo', 'ASC']
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al intentar obtener los enlaces."
            });
        });
};

// Encontrar un único enlace por su ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Enlace.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Ha ocurrido un error al intentar obtener el enlace con ID = " + id + "."
            });
        });
};

// Actualizar un enlace por su ID en la solicitud
exports.update = (req, res) => {
    const id = req.params.id;

    Enlace.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "¡Enlace actualizado satisfactoriamente!"
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el enlace con ID = ${id}. !Puede ser que el enlace no exista en la base de datos o que la solicitud esté vacía!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error intentando actualizar el enlace con ID = " + id
            });
        });
};

// Eliminar un enlace por su ID en la solicitud
exports.delete = (req, res) => {
    const id = req.params.id;

    Enlace.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "¡Enlace eliminado satisfactoriamente!"
                });
            } else {
                res.send({
                    message: `¡No se pudo eliminar el enlace con ID = ${id}. Puede ser que el enlace no se encuentre en la base de datos!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "No se pudo eliminar el enlace con ID = " + id
            });
        });
};

// Eliminar todos los enlaces existentes en la base de datos
exports.deleteAll = (req, res) => {
    Enlace.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `¡${nums} enlaces han sido eliminados satisfactoriamente!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "¡Ha ocurrido en error mientras se intentaban eliminar todos los enlaces!"
            });
        });
};

// Obtener todos los enlaces por fecha de creación
// exports.findAllCreatedAt = (req, res) => {

// };