import React from "react";
import Header from "../../components/Header"
import CardA from '../../components/CardA'
import "./Style.css"

const Aeons = () => (
    <div>
        <Header />
        <div className="Aeon-container">
        <CardA img="/imagens/Aeon_IX.webp" nome="IX" caminho="A Inexistência" imgCaminho="/imagens/Caminho_inexistencia_Transparente.webp"/>
        <CardA img="/imagens/Aeon_Nous.webp" nome="Nous" caminho="A Erudição" imgCaminho="/imagens/Caminho_Erudicao.png"/>
        <CardA img="/imagens/Aeon_Yaoshi.webp" nome="Yaoshi" caminho="A Abundância" imgCaminho="/imagens/Caminho_Abundancia.png"/>
        <CardA img="/imagens/Aeon_Nanook.webp" nome="Nanook" caminho="A Destruição" imgCaminho="/imagens/Caminho_Destruicao2.webp"/>
        <CardA img="/imagens/Aeon_Aha.webp" nome="Aha" caminho="A Euforia" imgCaminho="/imagens/Caminho_Euforia.webp"/>
        <CardA img="/imagens/Aeon_Lan.webp" nome="Lan" caminho="A Caça" imgCaminho="/imagens/Caminho_Caca.webp"/>
        <CardA img="/imagens/Aeon_Xipe.webp" nome="Xipe" caminho="A Harmonia" imgCaminho="/imagens/Caminho_Harmonia2.webp"/>
        <CardA img="/imagens/Aeon_Qlipoth.webp" nome="Qlipoth" caminho="A Preservação" imgCaminho="/imagens/Caminho_Preservacao.webp"/>
        <CardA img="/imagens/Aeon_Fuli.webp" nome="Fuli" caminho="A Recordação" imgCaminho="/imagens/Caminho_Recordacao.png"/>
        <CardA img="/imagens/Aeon_Tayzzyronth.webp" nome="Tayzzyronth" caminho="A Propagação" imgCaminho="/imagens/Caminho_Propagacao.webp"/>
        </div>
    </div>
);

export default Aeons;