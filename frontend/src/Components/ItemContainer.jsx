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
        })
        .catch((err)=>{
            console.log("Error for categoryItems: ",err);
        });
    },[]);

    return (
        <div className="ItemContainer min-h-[600px] pb-3 overflow-y-auto flex flex-1 flex-wrap flex-row gap-9">
            {
                (!categoryItems)?
                    <div> Loading....</div>
                :
                categoryItems.map((item)=>{
                        if(props.category === 'all'){
                            return   <Item key={item.id} item={item} />
                        }
                        else{
                            if(props.category === item.category ){
                                return   <Item key={item.id} item={item} />
                            }
                        }
                    }
                )
            }
        </div>
    );
}