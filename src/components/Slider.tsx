import React,{ useState } from "react";
import { setter } from "./pswd_generator";


function Slider(){    

    const [charLength, setCharLength] = useState(5);

    function rangeChange(event : React.ChangeEvent<HTMLInputElement>){
        const value = parseInt(event.target.value); 
        setCharLength(value);
        setter(value);
    }

    return(
        <div className="relative flex flex-col justify-center items-center mx-4 mb-1 font-Raleway h-12 w-full ">
            <label htmlFor="" className="count-posi flex justify-center items-center w-20 h-6 rounded bg-purple font-Poppins text-2xl text-white">{charLength}</label>
            <div className="flex justify-between w-full">
                <div className="flex gap-1">
                    <div className="text-purple">Min</div>
                    <div className="text-purple dark:text-white">5</div>
                </div>
                <div className="flex gap-1">
                    <div className="text-purple">Max</div>
                    <div className="text-purple dark:text-white">25</div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full relative">
                <input className="slider-range w-full" type="range" name="" id="" min={5} max={25} defaultValue={5} onChange={rangeChange}/>
            </div>
        </div>
    );
}

export default Slider;