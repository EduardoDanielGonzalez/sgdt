module.exports = app => {
    const cheque = require("../controllers/cheque.controller.js");

    var router = require("express").Router();

    // Create a new
    router.post("/", cheque.create);

    // Retrieve all
    router.get("/", cheque.findAll);

    // Retrieve a single with id
    router.get("/:id", cheque.findOne);

    // Update with id
    router.put("/:id", cheque.update);

    // Delete with id
    router.delete("/:id", cheque.delete);

    // Delete all
    router.delete("/", cheque.deleteAll);

    app.use('/api/cheques', router);
};