import React from 'react';
import { useHistory } from "react-router-dom";
export const Button = (props) => {
    let { children, disabled, className,onClick ,email ,...others} = props;
    let history = useHistory();
    
    return (
        <button className={`btn ${className} `} onClick={onClick}>{children}</button>
    );
};