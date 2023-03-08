import React, { useState, useEffect } from 'react';
import { ReactComponent as SunLogo } from "../assets/sun.svg";
import { ReactComponent as MoonLogo } from "../assets/moon.svg";

function Header() {    

    function alterTheme(event: React.MouseEvent<HTMLDivElement>){
        let theme = event.currentTarget;
        let doc = document.documentElement;
        if(theme.classList.contains('dark-theme')){
            doc.classList.add('dark');
        }else{
            doc.classList.remove('dark');            
        }        
    }    

    return (
        <header className="flex flex-col h-32 w-full font-Raleway relative ">
            <h1 className="text-purple dark:text-white text-2xl leading-none mt-8">Password</h1>
            <h1 className="title-gradient">Generator</h1>
                
                <div className="btn-themes absolute flex flex-col justify-start items-center border border-azul bg-white dark:bg-azul border-purple gap-1 rounded-full right-0 cursor-pointer">
                    <div className="dark-theme slow-transition flex justify-center items-center h-6 w-6 dark:bg-white rounded-full" onClick={alterTheme}>
                        < MoonLogo width={15} height={15} className="slow-transition fill-azul dark:fill-azul"/>
                    </div>

                    <div className="light-theme slow-transition flex justify-center items-center h-6 w-6 bg-purple dark:bg-azul rounded-full" onClick={alterTheme}>
                        <SunLogo width={15} height={15} className="slow-transition fill-white dark:fill-white"/>
                    </div>
                    
                </div>

                {/*
                {darkTheme && 
                    <div className="btn-themes absolute flex flex-col justify-start items-center border border-purple bg-azul gap-1 rounded-full right-0 cursor-pointer">
                        <div className="slow-transition flex justify-center items-center h-6 w-6 bg-white rounded-full">
                            < MoonLogo width={15} height={15} className="slow-transition fill-black"/>
                        </div>
                        <SunLogo width={16} height={16} className="slow-transition fill-white" onClick={alterTheme}/>  
                    </div>
                }
                {!darkTheme &&
                    <div className="btn-themes absolute flex flex-col justify-end items-center border border-azul bg-purple gap-1 rounded-full right-0 cursor-pointer">
                        
                        <MoonLogo width={15} height={15} className="slow-transition fill-azul" onClick={alterTheme}/>
                        <div className="slow-transition flex justify-center items-center h-6 w-6 bg-azul rounded-full">
                            < SunLogo width={15} height={15} className=" slow-transition fill-purple"/>
                        </div>  
                    </div>
                }
            */}                        
        </header>
    ); 
}

export default Header;