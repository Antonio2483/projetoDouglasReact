import React from "react";
import './Style.css';
import { Link } from 'react-router-dom';

export default function CardA(props){
    return(
        <div className="aeon-card">
        <img src={props.img} alt="Aeon" className="aeon-image" />
        <div className="aeon-text" style={{backgroundImage:`url(${props.imgCaminho})`}}>
            <h2>{props.nome}</h2>
            <p>{props.caminho}</p>
        </div>
        </div>
    )
}