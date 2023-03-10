import { useEffect, useState } from 'react';
import { ReactComponent as CheckLogo } from '../assets/check.svg';
import { setter } from './pswd_generator';

export type Attr = {
    charLength?: number
    small : boolean,
    capital : boolean,
    numeric : boolean,
    especial : boolean
}

function Attributes(){

    const [AttrState, setAttrState] = useState<Attr>({
        small : false,
        capital : false,
        numeric : true,
        especial : false
    });

    const [countAttrOn, setOnAttr] = useState(1);


    function selected(event: React.MouseEvent<HTMLDivElement>){
        const item_id = event.currentTarget.id;        
        
        switch(item_id){
            case 'small':
                if(AttrState.small === false){
                    setOnAttr(countAttrOn + 1);
                    setAttrState({...AttrState, small: !AttrState.small});                                    
                }else if(countAttrOn > 1){
                    setOnAttr(countAttrOn - 1);
                    setAttrState({...AttrState, small: !AttrState.small});
                    
                }
                break;
            case 'capital':
                if(AttrState.capital === false){
                    setOnAttr(countAttrOn + 1);  
                    setAttrState({...AttrState, capital: !AttrState.capital});
                                  
                }else if(countAttrOn > 1){
                    setOnAttr(countAttrOn - 1);
                    setAttrState({...AttrState, capital: !AttrState.capital});
                    
                }  
                break;
            case 'numeric':
                if(AttrState.numeric === false){
                    setOnAttr(countAttrOn + 1);
                    setAttrState({...AttrState, numeric: !AttrState.numeric});
                                    
                }else if(countAttrOn > 1){
                    setOnAttr(countAttrOn - 1);
                    setAttrState({...AttrState, numeric: !AttrState.numeric});                    
                }  
                break;
            case 'especial':
                if(AttrState.especial === false){
                    setOnAttr(countAttrOn + 1); 
                    setAttrState({...AttrState, especial: !AttrState.especial});
                                   
                }else if(countAttrOn > 1){
                    setOnAttr(countAttrOn - 1);
                    setAttrState({...AttrState, especial: !AttrState.especial});
                    
                }  
                break;
        }             
    }

    useEffect(() => (        
        setter(AttrState)
    ), [AttrState, countAttrOn]);

    return(
        <div className="attributes-layout flex justify-center items-center h-60 w-full  text-white rounded-md font-Raleway bg-purple2 dark:bg-darkblue">
            <div className="flex flex-col gap-3">
                <div id='small' className="flex justify-center items-center gap-1 cursor-pointer" onClick={selected}>
                    <div className="">
                        {!AttrState.small && 
                            <CheckLogo className="fill-purple" width={31} height={31}/>
                        }
                        {AttrState.small && 
                            <CheckLogo className="fill-white bg-purple rounded-full" width={31} height={31}/>
                        }
                    </div>
                    <div className="flex justify-center items-center h-7 w-48 border border-white rounded-xl text-white">
                        Small letters
                    </div>
                </div>

                <div id='capital' className="flex justify-center items-center gap-1 cursor-pointer" onClick={selected}>
                    <div className="">
                        {!AttrState.capital && 
                            <CheckLogo className="fill-purple" width={31} height={31}/>
                        }
                        {AttrState.capital && 
                            <CheckLogo className="fill-white bg-purple rounded-full" width={31} height={31}/>
                        }
                    </div>
                    <div className="flex justify-center items-center h-7 w-48 border border-white rounded-xl text-white">
                        Capital letters
                    </div>
                </div>

                <div id='numeric' className="flex justify-center items-center gap-1 cursor-pointer" onClick={selected}>
                    <div className="">
                        {!AttrState.numeric && 
                            <CheckLogo className="fill-purple" width={31} height={31}/>
                        }
                        {AttrState.numeric && 
                            <CheckLogo className="fill-white bg-purple rounded-full" width={31} height={31}/>
                        }
                    </div>
                    <div className="flex justify-center items-center h-7 w-48 border border-white rounded-xl text-white">
                        Numbers
                    </div>
                </div>

                <div id='especial' className="flex justify-center items-center gap-1 cursor-pointer" onClick={selected}>
                    <div className="">
                        {!AttrState.especial && 
                            <CheckLogo className="fill-purple" width={31} height={31}/>
                        }
                        {AttrState.especial && 
                            <CheckLogo className="fill-white bg-purple rounded-full" width={31} height={31}/>
                        }
                    </div>
                    <div className="flex justify-center items-center h-7 w-48 border border-white rounded-xl text-white">
                        Special characters
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Attributes;