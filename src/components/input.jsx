import React,{useState,useEffect} from 'react';
import {auth,firestore,createDoc} from '../pages/firebase'
export const Input = (props) => {
    let { className,type,value,id,onchange, ...others} = props;
    

    
    return (
        <div>
            <input className={`input ${className}`} {...others}  type={type} onChange={onchange} id={id}/>
        </div>
    );
};