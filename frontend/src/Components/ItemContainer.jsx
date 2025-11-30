import React from "react";
import { useState,useEffect } from "react";
import api from "../api/axios";

export const ItemContainer = () =>{

    const [categoryItems,setCategoryItems] = useState(null);

    useEffect(()=>{
        api.get("/")
        .then((res)=>{
            setCategoryItems(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log("Error for categoryItems: ",err);
        });
    },[]);

    return (
        <div className="ItemContainer">
            hello
        </div>
    );
}