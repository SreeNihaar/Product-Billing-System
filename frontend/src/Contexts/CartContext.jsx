import React,{createContext, useContext, useState} from "react";

const CartContext = createContext(null);


export const CartProvider = ({children})=>{
    const [cartMap,setCartMap] = useState({});
    function updateCartMap(item,count){
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

    return(
        <CartContext.Provider value={{cartMap, updateCartMap}}>
            {children}
        </CartContext.Provider>
    );
};

export const useData = ()=>{
    const ctx = useContext(CartContext);
    if(!ctx){
        throw new Error("useData must be inside DataProvider");
    }
    return ctx;
};