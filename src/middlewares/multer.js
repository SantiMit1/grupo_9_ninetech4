const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../public/img/Productos"));
    },
    filename: (req, file, cb) => {
        cb(null, "Product_" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

module.exports = upload;