import {neon} from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const {PGHOST, PGPASSWORD, PGDATABASE, PGUSER} = process.env;
const {DATABASE_URL} = process.env;
console.log(DATABASE_URL);
export const sql = neon(`${DATABASE_URL}`);