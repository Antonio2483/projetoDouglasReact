import React from "react";
import Header from "../../components/Header"
import CardA from '../../components/CardA'
import "./Style.css"

const Aeons = () => (
    <div>
        <Header />
        <div className="Aeon-container">
        <CardA img="/imagens/Aeon_IX.webp" nome="IX" caminho="A Inexistência" imgCaminho="/imagens/Caminho_inexistencia_Transparente.webp"/>
        <CardA img="/imagens/Aeon_Nous.webp" nome="Nous" caminho="A Erudição"/>
        <CardA img="/imagens/Aeon_Yaoshi.webp" nome="Yaoshi" caminho="A Abundância"/>
        <CardA img="/imagens/Aeon_Nanook.webp" nome="Nanook" caminho="A Destruição"/>
        </div>
    </div>
);

export default Aeons;