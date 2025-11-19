import express from "express";

import {
    getAllProducts,
    getFilteredProducts,
    getCategoryProducts
} from '../controllers/productControllers.js';

const router = express.Router();

router.get("/",getAllProducts);

router.get("/sort",getFilteredProducts);

router.get("/category",getCategoryProducts);

export default router;