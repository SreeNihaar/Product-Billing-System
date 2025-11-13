import express from "express";

import {
    getAllProducts,
    getFilteredProducts
} from '../controllers/productControllers.js';

const router = express.Router();

router.get("/",getAllProducts);

router.get("/sort",getFilteredProducts);

export default router;