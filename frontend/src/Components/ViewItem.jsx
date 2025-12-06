import React from "react";
import { ItemContainer } from "./ItemContainer.jsx";
import { CartContainer } from "./CartContainer.jsx";

export const ViewItem = ()=>{
    return (
        <div className="ViewItem flex-1 overflow-y-auto">
            <ItemContainer />
            <CartContainer />
        </div>
    );
}