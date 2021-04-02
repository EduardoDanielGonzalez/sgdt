module.exports = app => {
    const cuentajpm = require("../controllers/cuentajpm.controller.js");

    var router = require("express").Router();

    // Create a new
    router.post("/", cuentajpm.create);

    // Retrieve all
    router.get("/", cuentajpm.findAll);

    // Retrieve all CreatedAt
    // router.get("/createdat", enlace.findAllCreatedAt);

    // Retrieve a single with id
    router.get("/:id", cuentajpm.findOne);

    // Update with id
    router.put("/:id", cuentajpm.update);

    // Delete a Tutorial with id
    router.delete("/:id", cuentajpm.delete);

    // Delete all Tutorials
    router.delete("/", cuentajpm.deleteAll);

    app.use('/api/cuentasjpm', router);
};