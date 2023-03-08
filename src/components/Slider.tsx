import React from "react";

type props = {
    charLength : (chars : number) => void 
}

function Slider({charLength} : props){

    function rangeChange(event : React.ChangeEvent<HTMLInputElement>){
        charLength(parseInt(event.target.value));
    }

    return(
        <div className="flex flex-col justify-center items-center mx-4 mb-1 font-Raleway h-12 w-full ">
            <div className="flex justify-between w-full">
                <div className="flex gap-1">
                    <div className="text-purple">Min</div>
                    <div className="text-purple dark:text-white">5</div>
                </div>
                <div className="flex gap-1">
                    <div className="text-purple">Max</div>
                    <div className="text-purple dark:text-white">200</div>
                </div>
            </div>
            <div className="flex justify-center items-center w-full relative">
                <input className="slider-range w-full" type="range" name="" id="" min={5} max={200} defaultValue={5} onChange={rangeChange}/>
            </div>
        </div>
    );
}

export default Slider;