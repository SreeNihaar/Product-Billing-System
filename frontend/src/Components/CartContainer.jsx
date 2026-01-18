import React, { useState } from "react";

export const CartContainer = (props) =>{
    const [price,setPrice] = useState(0);

    return (
        <div className="CartContainer w-full mt-4 bg-emerald-900 flex flex-row align-center p-4 gap-4">
            <div className="cart">
                <button type="button">Cart ▶</button>
            </div>
            <div className="price content-center">
                <p className="font-bold text-3xl">₹ {props.totalPrice}</p>
            </div>
        </div>
    );
}