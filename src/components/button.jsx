import React from 'react';
import { useHistory } from "react-router-dom";
export const Button = (props) => {
    let { children, disabled, className,onClick ,...others} = props;
    let history = useHistory();
    console.log(children)
    return (
        <button className={`btn ${className} `} onClick={onClick}>{children}</button>
    );
};