import { useState, useEffect } from 'react';
import { ReactComponent as RefreshLogo } from "../assets/refresh.svg";
import { ReactComponent as CopyLogo } from "../assets/copy.svg";
import { ReactComponent as PlayLogo } from "../assets/botao-play.svg";
import { generator } from "./pswd_generator";

type props = {    
    
}

function Result(){   
    const [level, setLevel] = useState('');
    const [resultPswd, setResultPswd] = useState('');

    function copyPassword(){
        navigator.clipboard.writeText(resultPswd);
    }

    function playGenerator(){
        setResultPswd(generator());        
    }

    return(
        <div className="flex flex-col justify-center w-full font-Poppins  mx-4 ">
            <label htmlFor="" className="text-red font-Raleway">{level}</label>

            <label className="flex items-center result-pswd bg-white text-purple dark:bg-azul text-purple w-full h-12 border border-purple rounded-lg p-1 font-Poppins">{resultPswd!= ''? resultPswd : 'Password generate'}</label>

            <div className="flex w-full justify-end my-3">
                
                <div className="flex gap-2">
                    <div className="">
                        <PlayLogo className="component-svg" width={38} height={38} onClick={playGenerator}/>
                    </div>
                    <div className="">
                        <CopyLogo className="component-svg" width={28} height={28} onClick={copyPassword}/>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Result;