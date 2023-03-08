import { useState, useEffect } from 'react';
import { ReactComponent as RefreshLogo } from "../assets/refresh.svg";
import { ReactComponent as CopyLogo } from "../assets/copy.svg";
import { IndexType } from "typescript";

type props = {
    resultPassword : string,
    count : number,
    refresh : (c : number) => void
}

function Result({ resultPassword, count, refresh }: props){   

    const [level, setLevel] = useState('');

    function getLevel(){
        if(count == 200){
            setLevel('Max security');
        }
        if(count >= 100){
            setLevel('High security');
        }            
        if(count >= 50){
            setLevel('Medium security');
        }
        if(count <= 50){
            setLevel('Low security');
        }
    }

    function runRefresh(){
        refresh(count);
    }

    function copyPassword(){
        navigator.clipboard.writeText(resultPassword);
    }

    useEffect(() => {
        getLevel()
    }, [count]);

    return(
        <div className="flex flex-col justify-center w-full font-Poppins  mx-4 ">
            <label htmlFor="" className="text-red font-Raleway">{level}</label>

            <label className="flex items-center result-pswd bg-white text-purple dark:bg-azul text-purple w-full h-12 border border-purple rounded-lg p-1 font-Poppins">{resultPassword != ''? resultPassword : 'Password generated' }</label>

            <div className="flex w-full justify-between my-3">
                <label htmlFor="" className="flex justify-center items-center w-20 h-6 rounded bg-purple text-2xl text-white">{count}</label>
                <div className="flex gap-3">
                    <div className="">
                        <CopyLogo className="component-svg" onClick={copyPassword}/>
                    </div>
                    <div className="">
                        <RefreshLogo className="component-svg" onClick={runRefresh}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;