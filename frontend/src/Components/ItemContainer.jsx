import React from "react";
import { useState,useEffect } from "react";
import api from "../api/axios";
import { Item } from "./Item.jsx";
export const ItemContainer = () =>{

    const [categoryItems,setCategoryItems] = useState(null);

    useEffect(()=>{
        api.get("/")
        .then((res)=>{
            setCategoryItems(res.data);
            console.log(res.data);
            console.log(typeof res.data)
        })
        .catch((err)=>{
            console.log("Error for categoryItems: ",err);
        });
    },[]);

    return (
        <div className="ItemContainer flex flex-wrap flex-row gap-9">
            {
                (!categoryItems)?
                    <div> Loading....</div>
                :
                categoryItems.map((item)=>
                    <Item key={item.id} name={item.name} category={item.category} price={item.price} imgURL={item.image} />
                )
            }
        </div>
    );
}