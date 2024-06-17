import React from "react";
import './Style.css';

export default function Container(props){
    return(
        <div className="container-main">
            {props.children}
        </div>
    )
}