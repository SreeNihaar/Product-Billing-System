import React from "react";
import { useState,useEffect } from "react";
import api from "../api/axios";
import { Item } from "./Item.jsx";
export const ItemContainer = (props) =>{

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
                    <Item key={item.id} item={item} onClick={props.onClick} />
                )
            }
        </div>
    );
}