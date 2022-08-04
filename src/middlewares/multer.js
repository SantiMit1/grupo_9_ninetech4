const path = require("path");
const multer = require("multer");

function multerCfg(name) {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, "../../public/img/", name));
        },
        filename: (req, file, cb) => {
            cb(null, name + "_" + Date.now() + path.extname(file.originalname));
        }
    });

    return multer({storage})
}

module.exports = multerCfg;