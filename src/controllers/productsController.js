const fs = require("fs");
const path = require("path");
let productosJSON = fs.readFileSync(path.resolve(__dirname, "../database/productos.json"), "utf-8");
let productos = JSON.parse(productosJSON);
const jsonDB = require("../model/jsonDatabase");
const productModel = jsonDB("productos");

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

    guardar: (req, res) => {
        let newProduct = {
            ...req.body,
            image: req.file ? req.file.filename : "default.png"
        };
        newProduct.description = newProduct.description.split("\r\n");

        productModel.create(newProduct)
		res.redirect('/')
    },

    editar: (req, res)=>{
        const id = Number(req.params.id);
        const producto = productos.find(producto => producto.id === id);
        res.render("editar", {
            producto: producto,
            productos: productos
        });
    },

    actualizar: (req, res) => {
        let id = Number(req.params.id);
		let productToEdit = productModel.find(id);

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: req.file ? req.file.filename : productToEdit.image
		}
        productToEdit.description = productToEdit.description.split("\r\n");

		productModel.update(productToEdit);
		res.redirect("/");
    },

    borrar: (req, res) => {
        const id = req.params.id;
        productModel.delete(id);
        res.redirect("/");
    }
}

module.exports = controller;