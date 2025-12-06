import React,{useState} from "react";
import { Sidebar } from "./Sidebar.jsx";
import { ViewItem } from "./ViewItem.jsx";

export const Dashboard = ()=>{
    return(
        <div className="Dashboard h-screen flex flex-col">
            <div className="pt-10 flex flex-row gap-15 overflow-hidden ">
                <Sidebar />
                <ViewItem />
            </div>
        </div>
    );
}