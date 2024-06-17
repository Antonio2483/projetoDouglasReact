import React from "react";
import './Style.css';
import { Link } from 'react-router-dom';

export default function CardCam(props){
    return(
        <div className="card-cam">
            <img src={props.img} alt="Caminho" />
            <div className="card-cam-content">
                <h2>{props.nome}</h2>
                <p>{props.children}</p>
            </div>
        </div>
    )
}