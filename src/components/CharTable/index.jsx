import React from "react";
import './Style.css';
import { Link } from 'react-router-dom';

export default function CharTable(props){
    return(
        <table className="char-table">
            <tr>
                <th>{props.nome}</th>
            </tr>
            <tr>
                <td>"{props.frase}"</td>
            </tr>
            <tr>
                <td>{props.raridade}</td>
            </tr>
            <tr>
                <td>
                    <div className='char-texto-imagem' style={{backgroundImage:`url(${props.imgCaminho})`}}>
                    {/* <img src={props.imgCaminho} alt="caminho" className="char-img-caminho"/> */}
                    {props.caminho}
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                        <div className='char-texto-imagem' style={{backgroundImage:`url(${props.imgElemento})`}}>
                        {/* <img src="/imagens/Elemento_Raio.webp" alt="raio" className="char-img-elemento"/> */}
                        {props.elemento}
                        </div>
                    </td>
                    </tr>
                </table>
    )
}