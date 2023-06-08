const express = require("express");

const {productsController} = require("../controllers/index");

const productsRouter = express.Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/:id", productsController.getProduct);
productsRouter.post("/", productsController.getFilteredProducts);


module.exports = productsRouter

