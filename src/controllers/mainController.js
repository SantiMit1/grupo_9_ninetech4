const jsonDB = require("../model/jsonDatabase");
const productModel = jsonDB("productos");

let controller = {
    index: (req, res) => {
        let productos = productModel.all();
        res.render("home", {
            productos: productos
        });
    },

    busqueda: (req, res) => {{
        const busqueda = req.query.q;
        let productos = productModel.all();
        let resultados = productos.filter(producto => producto.name.toUpperCase().includes(busqueda.toUpperCase()));
        res.render("resultados", {
            productos: resultados,
            busqueda: busqueda.toUpperCase()
        })
    }},

    categoria: (req, res) => {
        const categoria = req.query.q;
        let productos = productModel.all();
        const productosFiltrados = productos.filter(producto => producto.category === categoria);
        res.render("categoria", {
            productos: productosFiltrados,
            categoria: categoria
        })
    }
}

module.exports = controller;