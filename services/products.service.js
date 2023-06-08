const { Products } = require("../models/index");

const getAllProducts = async () => {
  const products = await Products.find();
  return products;
};

const getProduct = async (id) => {
  const product = await Products.find(id);
  return product;
};

const getFilteredProducts = async (query) => {
  const products = await Products.find(query);
  return products;
};

module.exports = { getAllProducts, getProduct, getFilteredProducts };
