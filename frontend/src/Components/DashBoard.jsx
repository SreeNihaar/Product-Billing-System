import React,{useState} from "react";
import { Sidebar } from "./Sidebar.jsx";
import { ItemContainer } from './ItemContainer.jsx';

export const Dashboard = ()=>{
    return(
        <div className="Dashboard pt-10">
            {/* <Sidebar /> */}
            <ItemContainer />
        </div>
    );
}