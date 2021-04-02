exports.allAccess = (req, res) => {
    res.status(200).send("Contenido público.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Contenido de usuario registrado.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Contenido de administrador registrado.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Contenido de moderador registrado.");
};