const express = require("express");
const router = express.Router();
const controller = require("../controllers/productsController");
const multerCfg = require("../middlewares/multer")
const upload = multerCfg("Productos");

router.get("/", controller.productos);
router.get("/carrito", controller.carrito);
router.get("/detalles/:id", controller.detalles);
router.get("/crear", controller.crear);
router.get("/detalles/editar/:id", controller.editar);

router.post("/crear", upload.single("image"), controller.guardar);
router.put("/detalles/editar/:id", upload.single("image"), controller.actualizar);
router.delete("/detalles/borrar/:id", controller.borrar);

module.exports = router;