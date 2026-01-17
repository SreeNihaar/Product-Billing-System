import React, { useState } from "react";

export const Item = (props)=>{

    const id= props.item.id || 1;
    const name= props.item.name || 'Plate Idly';
    const price = props.item.price || 40;
    const imgURL = 'https://tinyurl.com/n2k2pkwk';
    const category = props.item.category || 'tiffin';

    const [count,setCounter] = useState(0);

    function addCount(e){
        if(count<9){
            const newValue=count+1;
            props.onClick(props.item,newValue);
            setCounter(newValue); //Do not call one setState inside another setState
        }
        else
            return;
    }

    function subCount(e){
        if(count>0){
            const newValue = count-1;
            props.onClick(props.item,newValue);
            setCounter(newValue);
        }
        else
            return;
    }

    return (
        <div className="Item w-fit p-3.5 border border-white-950 rounded-lg flex flex-row gap-2">
            <div className="vert1 flex flex-col gap-3">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-sm italic" >{category}</p>
                <p className="font-bold text-xl relative top-10.5" >₹ {price}</p>
            </div>
            <div className="vert2 flex flex-col gap-1">
                <img className="inline-block" src={imgURL} alt="image" width={200} height={200}/>
                <div>
                    {
                        (count===0)?
                        (
                            <div>
                                <button className="flex self-center justify-center m-0 mx-auto pb-4" onClick={addCount}>
                                    <p className="text-xl font-bold">
                                        +
                                    </p>
                                </button>
                             </div>
                        ):
                        (
                            <div className="flex items-center justify-around m-0 mx-auto py-2 transition-all duration-300">
                                <button onClick={subCount}>
                                    <p className="text-xl font-bold">
                                        -
                                    </p>
                                </button>
                                <div className="text-xl font-bold">
                                    {count}
                                </div>
                                <button onClick={addCount}>
                                    <p className="text-xl font-bold">
                                        +
                                    </p>
                                </button>  

                            </div>
                        )
                    }
                </div>
                
            </div>
        </div>
    );
}