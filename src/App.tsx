import React,{useState, useEffect} from 'react';
import c from "./components/allcomponents";



function App() {
  
  return (
    <div className="my-root-layout flex flex-col justify-center items-center flex-auto min-h-screen
    dark:bg-gradient-to-r from-purple via-purple2 to-purple px-2">
      <div className="my-layout flex flex-col justify-start items-center w-full px-2 py-3 gap-1 bg-white dark:bg-azul rounded-xl">
          <c.Header/>
          <div className='grid1 flex flex-col justify-center items-center w-full'>
            <c.Result/>
            <c.Slider/>   
          </div>                         
          <div className="grid2 w-full">
            <c.Attributes/>
          </div>
      </div>             
    </div>
  );
}

export default App;
