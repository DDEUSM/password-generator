
import { Attr } from './Attributes';

const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
const capitalletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const nums = '0123456789';
const symbols = '!@#$%¨"&*()_-=+{}[],.<>;:/?|';

const attributes: Attr = {
    charLength: 5,
    small: false,
    capital: false,
    numeric: true,
    especial: false
}

export function setter(data : Attr | number){
    if(typeof(data) == 'number'){
        attributes.charLength = data;
    }else{         
        attributes.small = data.small;
        attributes.capital = data.capital;
        attributes.numeric = data.numeric;
        attributes.especial = data.especial;
    }
}

export function defLevel(){
    let level = '';
    let pts = 0;    
    const arrValues = Object.values(attributes);    
    const lengthPontuation = [5, 10, 18, 25];
    for(let i = 0; i <= arrValues.length; i++){
        if(i == 0){
           for(let l in lengthPontuation){
            pts = arrValues[0] >= lengthPontuation[l]? pts + 1 : pts;                        
           }
           continue;           
        }
        pts = arrValues[i]? pts + 1 : pts;        
    }
    return pts === 8 ? 'Max security' 
        : pts === 7? 'High security'
        : pts === 6? 'Medium security'
        : 'Low security';   
}
    
export function generator(){    
    let pssw : string = '';
    const arrCharTypes = [];

    if(attributes.small){
        arrCharTypes.push(smallLetters);
    }
    if(attributes.capital){
        arrCharTypes.push(capitalletters);
    }
    if(attributes.especial){
        arrCharTypes.push(symbols);
    }
    if(attributes.numeric){
        arrCharTypes.push(nums);
    }    
    if(attributes?.charLength){
        for(let i = 0; i < attributes.charLength; i ++){
            const charType = Math.floor(Math.random() * arrCharTypes.length);            
            const ind = Math.floor(Math.random() * arrCharTypes[charType].length);
            const new_char = arrCharTypes[charType][ind];  
            pssw += String(new_char);     
        }
    }
    return pssw;
} 



