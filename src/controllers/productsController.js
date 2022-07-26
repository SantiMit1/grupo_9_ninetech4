const fs = require("fs");
const path = require("path");
let productosJSON = fs.readFileSync(path.resolve(__dirname, "../database/productos.json"), "utf-8");
let productos = JSON.parse(productosJSON);

let controller = {
    carrito: (req, res) => {
        res.render("carrito");
    },

    detalles: (req, res) => {
        const id = Number(req.params.id);
        const producto = productos.find(producto => producto.id === id);
        res.render("detalles", {
            producto: producto,
            productos: productos
        });
    },

    productos: (req, res) => {
        res.render("productos", {
            productos: productos
        })
    },

    crear: (req, res)=>{
        res.render("crear")
    },

    // guardar: (req, res) => {

    // }

    editar: (req, res)=>{
        const id = Number(req.params.id);
        const producto = productos.find(producto => producto.id === id);
        res.render("editar", {
            producto: producto,
            productos: productos
        });
    },

    // actualizar: (req, res) => {

    // },

    // borrar: (req, res) => {

    // }
}

module.exports = controller;