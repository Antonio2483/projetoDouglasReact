import React from "react";
import './Style.css';
import { Link } from 'react-router-dom';

export default function CardP(props){
    return(
        <div className="card-cone">
            <img src={props.img} alt="Cone de Luz" style={{width:"100%"}}/>
            <div className="container-cone">
                <div className="card-cone-center">
                    <h4 className="title">{props.nome}</h4>
                    <p>{props.raridade}</p>
                </div>
                <div className="path">
                <p><img src={props.imgCaminho}/>{props.caminho}</p>
                </div>
                <div className="status-container">
                    <div className="status-table">
                        <table className="table-status-cone">
                            <tr>
                                <td><img src="/imagens/Icone_HP.webp"/> PV</td>
                                <td className="td-status">{props.pv}</td>
                            </tr>
                            <tr>
                                <td><img src="/imagens/Icone_ATQ.webp"/> ATQ</td>
                                <td className="td-status">{props.atq}</td>
                            </tr>
                            <tr>
                                <td><img src="/imagens/Icone_DEF.webp"/> DEF</td>
                                <td className="td-status">{props.def}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <h5 className="ability-name">{props.passiva}</h5>
                <p className="ability-desc">{props.children}</p>
            </div>
        </div>
    )
}