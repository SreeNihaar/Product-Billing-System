import React from "react";
import './MenuCard.css';

export const MenuCard = (props)=>{
    return(
        <>
            <div className={props.className}>
                <div className="imgBlock">
                    <img src="image.png"/>
                </div>
                <div className="itemName">Dosa</div>
                <div className="itemCat">tiffin</div>
                <div className="itemPrice">Rs. 40</div>
            </div>
        </>
    );
};
