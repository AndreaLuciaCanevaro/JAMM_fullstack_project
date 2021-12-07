const express = require("express");
const router = express.Router();
const usersAPIController = require("../../controllers/api/usersAPIController");

// Listar usuarios
router.get("/", usersAPIController.list);

// Detalle de usuario
router.get("/:id", usersAPIController.detail);

module.exports = router;
