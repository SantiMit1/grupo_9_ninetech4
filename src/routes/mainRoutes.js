const express = require("express");
const router = express.Router()
const controller = require("../controllers/mainController")

router.get("/", controller.index);
router.get("/busqueda", controller.busqueda);
router.get("/categoria", controller.categoria);

module.exports = router;