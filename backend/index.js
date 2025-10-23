import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";


import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();

app.use(helmet());
app.use(morgan("dev"));

app.use("/api/products",productRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>console.log(`Server Started at PORT ${PORT}`));