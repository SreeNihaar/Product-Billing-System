import express from "express";

import {
    getAllProducts,
    getFilteredProducts,
    getCategoryProducts,
    getCategoryList
} from '../controllers/productControllers.js';

const router = express.Router();

router.get("/",getAllProducts);

router.get("/sort",getFilteredProducts);

router.get("/category",getCategoryProducts);

router.get("/categoryList",getCategoryList);

export default router;