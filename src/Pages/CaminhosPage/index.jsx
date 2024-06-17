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
        <CardC 
        img="/imagens/Caminho_Caca.webp"
        nome="A Caça"
        >
            Causa uma quantidade extraordinária de dano a um único alvo. A melhor maneira de causar dano a inimigos de Elite.
        </CardC>
        <CardC 
        img="/imagens/Caminho_Erudicao.png"
        nome="A Erudição"
        >
            Causa um poderoso dano a vários alvos. A melhor maneira de causar dano a grupos de inimigos.
        </CardC> 
        <CardC 
        img="/imagens/Caminho_Preservacao.webp"
        nome="A Preservação"
        >
            Possui habilidades defensivas poderosas para proteger aliados de muitas formas.
        </CardC>
        <CardC 
        img="/imagens/Caminho_Abundancia.png"
        nome="A Abundância"
        >
            Cura aliados e restaura PV da equipe.
        </CardC>
    </div>
);

export default Caminhos;