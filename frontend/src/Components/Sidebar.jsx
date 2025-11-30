import React from "react";
import api from "../api/axios.js";
import { useState, useEffect } from "react";

export const Sidebar = ()=>{

    const [categoryList,setCategoryList] = useState([]);

    useEffect(()=>{
        api.get("/categoryList")
            .then((res)=>{
                setCategoryList(res.data);
            })
            .catch((err)=>{
                console.log("Error for categoryList: ",err);
            });
    },[]);
    
    return(
        <div className="Sidebar flex items-center flex-col gap-5">
            <div className="categoryItem min-w-26 min-h-23 border border-red-900 p-8 mb-4 relative left-8 text-center">All</div>
            {
            categoryList 
            && 
                categoryList.map(
                    (cat,idx)=>
                        <div className="
                            categoryItem min-w-26 min-h-23 
                            border border-red-900 p-8 mb-4 
                            relative left-8 text-center" 
                            key={idx}>
                                {cat.category.charAt(0).toUpperCase() + cat.category.slice(1) }
                        </div>
                )
            }
        </div>
    );
}