import {sql} from "../config/db.js";

export const getAllProducts = async (req, res)=>{
    try{
        const response = await sql`
            SELECT * from products;
        `;
        return res.status(200).json(response);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg: error.message,status: 500});
    }
};
