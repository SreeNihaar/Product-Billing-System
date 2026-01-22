import React,{useState} from "react";
import { Sidebar } from "./Sidebar.jsx";
import { ViewItem } from "./ViewItem.jsx";
import { CartProvider } from "../Contexts/CartContext.jsx";

export const Dashboard = ()=>{

    const [selectedCategory, setSelectedCategory] = useState('all');
    return(
        <div className="Dashboard h-screen flex flex-col">
            <div className="pt-10 flex flex-row gap-15 overflow-hidden ">
                <Sidebar onClick={setSelectedCategory}/>
                <CartProvider>
                    <ViewItem category={selectedCategory}/>
                </CartProvider>
            </div>
        </div>
    );
}