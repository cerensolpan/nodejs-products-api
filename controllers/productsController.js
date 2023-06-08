const {productsServices} =require("../services/index")

const getAllProducts = async (req, res) => {
  try {
    const products = productsServices.getAllProducts();
    return res.send(products);
  } catch (err) {
    res.send({
      error: "Products get operation is failed" + err,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = productsServices.getProduct({ id: req.params.id });
    return res.send(product);
  } catch (err) {
    res.send({
      error: "Product get operation is failed" + err,
    });
  }
};

const getFilteredProducts = async (req, res) => {
  let query = {};
  try {
    const products = productsServices.getFilteredProducts(query);
    return res.send(products);
  } catch (err) {
    res.send({
      error: "Products filtered post operation is failed" + err,
    });
  }
};
module.exports = { getAllProducts, getProduct, getFilteredProducts };
