import React from "react";
import './Style.css';
import { Link } from 'react-router-dom';

export default function CardP(props){
    return(
        <Link to={props.to}>
            <div className="card-char">
                <img src={props.img} alt={props.nome} className="character-image" />
                <div className="info">
                    <h1 className="name">{props.nome}</h1>
                    <p className="path">{props.caminho}</p>
                    <p className="element">{props.elemento}</p>
                </div>
            </div>
        </Link>
    )
}