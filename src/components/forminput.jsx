import React,{useState,useEffect} from 'react';
import {auth,firestore,createDoc} from '../pages/firebase'
export const Forminput = (props) => {
    let { className,type,value,id,onchange,label, ...others} = props;
    return (
        <div>
            <div className='ph-4 font-ubuntu fs-12 lh-30 mt-1'>{label}</div>
            <input className={`input ${className}`} {...others}  type={type} onChange={onchange} id={id}/>
        </div>
    );
};