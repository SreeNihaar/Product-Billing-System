import React, { useState, useEffect } from "react";
import { ItemContainer } from "./ItemContainer.jsx";
import { CartContainer } from "./CartContainer.jsx";

export const ViewItem = ()=>{

    const [cartMap,setCartMap] = useState({});
    
    function handleClick(item,count){
        setCartMap((prev)=>{
            if(!prev){
                return {[item.id]:{item,count}};
            }
            const newObject={...prev};
            if(count===0){
                delete newObject[item.id];
                return newObject;
            }
            return {
                ...prev,
                [item.id]:{item,count}
            }
        });
    }

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        let total=0;
        for(const key in cartMap){
            const value=cartMap[key];
            total+=value.item.price*value.count;
        }
        setTotalPrice(total);
    },[cartMap])

    return (
        <div className="ViewItem flex-1 overflow-y-auto">
            <ItemContainer onClick={handleClick} />
            <CartContainer totalPrice={totalPrice} />
        </div>
    );
}