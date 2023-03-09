import { useState } from 'react';
import { Attr } from './Attributes';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const nums = '0123456789';
const symbols = '!@#$%¨"&*()_-=+{}[],.<>;:/?|';

const arrCharTypes = [letters, nums, symbols];

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
    
export function generator(){    
    let pssw : string = '';
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



