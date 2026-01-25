import React from "react";
import { useData } from "../Contexts/CartContext";
import { useUI } from "../Contexts/UIContext";

export const CheckoutPage = () => {
    const {cartMap} = useData();
    const {isCheckoutOpen, closeCheckout} = useUI();

    const cartArray = Object.values(cartMap);
    let price=0;
    cartArray.forEach((ele)=>{
        price+=ele.item.price;
    });
    return(
        <div
        className={`
          fixed top-0 right-0 h-full w-[500px] bg-[#242424] z-50
          shadow-xl transition-transform duration-300 p-5
          ${isCheckoutOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={closeCheckout}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <div className="checkout-page text-center flex flex-col gap-3">
            <h1 className="font-bold">Checkout</h1>
            <div className="checkout-container flex flex-col border border-red-500 p-4 gap-3">
                {
                    cartArray.map((ele)=>{
                        return (
                            <div key={ele.item.id} className="checkout-item min-w-80 h-fit p-3.5 border border-white rounded-lg flex flex-row justify-between "> 
                                <p className="font-bold">{ele.item.name}</p>
                                <div className="flex items-center gap-3 border border-gray-600 rounded-full px-3 py-1 bg-gray-900">
                                    <span className="min-w-6 text-center">
                                        {ele.count}
                                    </span>
                                </div>
                                <p className="font-bold text-xl top-10.5">₹ {ele.item.price}</p>
                            </div>
                        );
                    })
                }
            </div>
            <div className="checkout-footer flex flex-row justify-between">
                <p className=" pl-5 font-bold text-2xl">Total: </p>
                <p className="checkout-price font-bold text-4xl top-10.5 pr-3">₹ {price}.00 </p>
            </div>
            <div className="payBtnDiv">
                <button className="payBtn btn btn-outline-success my-2 my-sm-0 min-w-30" type="submit">Pay</button>
            </div>
        </div>
        </div>
    );
};