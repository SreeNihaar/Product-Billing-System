import React,{useState} from "react";
import { Sidebar } from "./Sidebar.jsx";
import { ViewItem } from "./ViewItem.jsx";
import { CartProvider } from "../Contexts/CartContext.jsx";
import { CheckoutPage } from "./CheckoutPage.jsx";
import { UIProvider } from "../Contexts/UIContext.jsx";

export const Dashboard = ()=>{

    const [selectedCategory, setSelectedCategory] = useState('all');
    return(
        <UIProvider>
            <CartProvider>
                <div className="Dashboard h-screen flex flex-col">
                    <div className="pt-10 flex flex-row gap-15 overflow-hidden ">
                        <Sidebar onClick={setSelectedCategory}/>
                        <ViewItem category={selectedCategory}/>
                    </div>
                </div>
                <CheckoutPage />
            </CartProvider>
        </UIProvider>
    );
}