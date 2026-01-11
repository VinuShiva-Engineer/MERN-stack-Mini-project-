import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProductById, updateProduct } from "../controller/product.controller.js";

const route = Router();

route.get('/',getProduct);

route.post('/',createProduct);

route.delete('/:id',deleteProduct);

route.put('/:id',updateProduct);

route.get('/:id',getProductById)

export default route;