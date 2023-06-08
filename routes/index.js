const express = require("express");

const productsRouter = require("./products.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/products",
    route: productsRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
