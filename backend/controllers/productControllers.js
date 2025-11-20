import supabase from "../config/db.js";

export const getAllProducts = async (req, res)=>{
    try{
        const {data,error} = await supabase.from("products").select('*');
        if(error){
            console.log(error);
            return res.status(500).json({msg: error.message,status: 500});
        }
        res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg: error.message,status: 500});
    }
};

export const getFilteredProducts = async (req,res)=>{
    try{
        const low = req.query.low,high=req.query.high;
        const {data,error} = await supabase
                                        .from("products")
                                        .select()
                                        .gte('price',low)
                                        .lte('price',high);
        if(error){
            console.log(error);
            return res.status(500).json({msg: error.message,status: 500});
        }    
        return res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg: error.message,status: 500});
    }
};

export const getCategoryProducts = async (req,res)=>{
    try{
        const category = req.query.category;
        const {data,error} = await supabase
                                        .from("products")
                                        .select()
                                        .eq('category',category);
        if(error){
            console.log(error);
            return res.status(500).json({msg: error.message,status: 500});
        }
        return res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg: error.message,status: 500});
    }
};

export const getCategoryList = async (req,res)=>{
    try{
        const {data,error} = await supabase.from("distinct_category_list")
                                            .select();
        if(error){
            console.log(error);
            return res.status(500).json({msg: error.message,status: 500});
        }
        return res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg: error.message,status: 500});
    }
};