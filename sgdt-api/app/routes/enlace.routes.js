module.exports = app => {
    const enlace = require("../controllers/enlace.controller.js");

    var router = require("express").Router();

    // Create a new
    router.post("/", enlace.create);

    // Retrieve all
    router.get("/", enlace.findAll);

    // Retrieve all CreatedAt
    // router.get("/createdat", enlace.findAllCreatedAt);

    // Retrieve a single with id
    router.get("/:id", enlace.findOne);

    // Update with id
    router.put("/:id", enlace.update);

    // Delete a Tutorial with id
    router.delete("/:id", enlace.delete);

    // Delete all Tutorials
    router.delete("/", enlace.deleteAll);

    app.use('/api/enlaces', router);
};