const express = require("express");
const router = express.Router()
const controller = require("../controllers/productsController")

router.get("/", controller.productos);
router.get("/carrito", controller.carrito);
router.get("/detalles/:id", controller.detalles);
router.get("/crear", controller.crear)
router.get("/detalles/:id/editar", controller.editar)

// router.post("/crear", controller.guardar)
// router.put("/detalles/:id/editar", controller.actualizar)
// router.delete("/detalles/:id/borrar", controller.borrar)

module.exports = router;