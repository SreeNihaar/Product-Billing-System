import React, { useState } from "react";

export const CartContainer = () =>{
    const [price,setPrice] = useState(0);

    return (
        <div className="CartContainer flex flex-row align-center p-4 gap-4">
            <div className="cart">
                <button type="button">Cart ▶</button>
            </div>
            <div className="price content-center">
                <p className="font-bold text-3xl">₹ {price}</p>
            </div>
        </div>
    );
}