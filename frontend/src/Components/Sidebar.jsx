import React from "react";
import api from "../api/axios.js";
import { useState, useEffect } from "react";
import { useUI } from "../Contexts/UIContext.jsx";

export const Sidebar = (props)=>{

    const [categoryList,setCategoryList] = useState([]);
    const {isCheckoutOpen} = useUI();

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
        <div className={isCheckoutOpen?"Sidebar blur-sm pointer-events-none flex items-center flex-col gap-5 ":"Sidebar flex items-center flex-col gap-5 "}>
            <div className="categoryItem cursor-pointer min-w-26 min-h-23 border border-red-900 p-8 mb-4 relative left-8 text-center" 
                onClick={()=>props.onClick('all')}>All</div>
            {
            categoryList 
            && 
                categoryList.map(
                    (cat,idx)=>
                        <div className="
                            categoryItem cursor-pointer min-w-26 min-h-23 
                            border border-red-900 p-8 mb-4 
                            relative left-8 text-center" 
                            key={idx}
                            onClick={()=>props.onClick(cat.category)}
                            >
                                {cat.category.charAt(0).toUpperCase() + cat.category.slice(1) }
                        </div>
                )
            }
        </div>
    );
}