//requires
const express = require('express');
const path = require("path");
const app = express();
const methodOverride = require("method-override");

//middlewares
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//rutas
const mainRoutes = require("./src/routes/mainRoutes");
const usersRoutes = require("./src/routes/usersRoutes.js");
const productsRoutes = require("./src/routes/productsRoutes.js");
app.use("/", mainRoutes);
app.use("/users", usersRoutes);
app.use("/productos", productsRoutes);
//404
app.use((req, res, next) => res.status(404).render("404"));


app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./src/views"));
const port = 3000;
app.listen(process.env.PORT || port, () => console.log(`app listening on port ${port}!`));