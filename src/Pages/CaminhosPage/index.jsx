import React from "react";
import Header from "../../components/Header"
import CardC from "../../components/CardCam"
import "./Style.css"

const Caminhos = () => (
    <div>
        <Header />
        <CardC 
        img="/imagens/Caminho_inexistencia.webp"
        nome="A Inexistência"
        >
            Aplica penalidades em inimigos para reduzir as capacidades de combate deles.
        </CardC>
        <CardC 
        img="/imagens/Caminho_destruicao.webp"
        nome="A Destruição"
        >
            Causa Dano extraordinário e melhora sua capacidade de sobrevivência. Excelente para diferentes cenários de combate.
        </CardC>
        <CardC 
        img="/imagens/Caminho_harmonia.webp"
        nome="A Harmonia"
        >
            Aplica melhorias em aliados para aprimorar as capacidades de combate da equipe.
        </CardC>
    </div>
);

export default Caminhos;