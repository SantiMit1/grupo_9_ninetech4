const fs = require("fs");
const path = require("path");
let productosJSON = fs.readFileSync(path.resolve(__dirname, "../database/productos.json"), "utf-8");
let productos = JSON.parse(productosJSON);

let controller = {
    index: (req, res) => {
        res.render("home", {
            productos: productos
        });
    }
}

module.exports = controller;