const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController");

// Listar productos
router.get("/", productsAPIController.list);

// Detalle de producto
router.get("/:id", productsAPIController.detail);

module.exports = router;
