const fs = require("fs");
const path = require("path");
let productosJSON = fs.readFileSync(path.resolve(__dirname, "../database/productos.json"), "utf-8");
let productos = JSON.parse(productosJSON);

let controller = {
    index: (req, res) => {
        res.render("home", {
            productos: productos
        });
    },

    busqueda: (req, res) => {{
        const busqueda = req.query.q;
        let resultados = productos.filter(producto => producto.name.toUpperCase().includes(busqueda.toUpperCase()));
        res.render("resultados", {
            productos: resultados,
            busqueda: busqueda.toUpperCase()
        })
    }},

    categoria: (req, res) => {
        const categoria = req.query.q;
        const productosFiltrados = productos.filter(producto => producto.category === categoria);
        res.render("categoria", {
            productos: productosFiltrados,
            categoria: categoria
        })
    }
}

module.exports = controller;