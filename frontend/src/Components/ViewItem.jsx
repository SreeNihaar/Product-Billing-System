import React, { useState, useEffect } from "react";
import { ItemContainer } from "./ItemContainer.jsx";
import { CartContainer } from "./CartContainer.jsx";
import { useData } from "../Contexts/CartContext.jsx";
import { useUI } from "../Contexts/UIContext.jsx";
export const ViewItem = (props)=>{

    const {cartMap, updateCartMap} = useData();
    const {isCheckoutOpen} = useUI();
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
        <div className={isCheckoutOpen?"ViewItem blur-sm pointer-events-none flex flex-col w-full pr-2.5":"ViewItem flex flex-col w-full pr-2.5"}>
            <ItemContainer category={props.category} />
            <CartContainer totalPrice={totalPrice} />
        </div>
    );
}