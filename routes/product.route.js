const express = require("express");
const Product = require("../models/product.model")
const router = express.Router();
const {getProducts, getProduct,createProduct} = require('../controllers/product.controller');

router.get('/',getProducts);

router.get("/:id",getProduct);

router.post("/",createProduct);


module.exports = router;