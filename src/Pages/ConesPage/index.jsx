import React from "react";
import Header from "../../components/Header"
import CardC from "../../components/CardC"
import "./Style.css"

const Cones = () => (
    <div>
        <Header />
        <div className="cones-container">
            <CardC
                img="/imagens/Serei_minha_propria_espada.webp" 
                nome="Eu Serei Minha Própria Espada"
                raridade="&#9733;&#9733;&#9733;&#9733;&#9733;"
                caminho="A Destruição"
                imgCaminho="/imagens/Caminho_destruicao.webp" 
                pv="1164"
                atq="582"
                def="396"
                passiva="Com Este Jade Vespertino"
            >
                Aumenta o Dano CRIT do Usuário em 20%. Quando um aliado(expluindo o usuário) é atacado ou perde PV, o usuário ganha 1 acúmulo de Eclipse, até um máximo de 3 acúmulos. 
                Cada acúmulo de Eclipse aumenta o Dano do próximo ataque do usuário em 14%. Ao alcançar 3 acúmulos, permite adicionalmente que este ataque ignore 12% da DEF do inimigo. Este efeito será removido depois que o usuário utilizar um ataque.
            </CardC>
            <CardC
                img="/imagens/Algo_Insubstituivel.webp" 
                nome="Algo Insubstituivel"
                raridade="&#9733;&#9733;&#9733;&#9733;&#9733;"
                caminho="A Destruição"
                imgCaminho="/imagens/Caminho_destruicao.webp" 
                pv="1164"
                atq="582"
                def="396"
                passiva="Afinidade"
            >
                Aumenta em 24% o ATQ do usuário. Quando o usuário derrota um inimigo ou é atingido, recupera imediatamente PV equivalentes a 8% do próprio ATQ. Ao mesmo tempo, o Dano do usuário aumenta em 24%
                até o fim da sua próxima rodada. Este efeito não se acumula e só pode ser ativado 1 vez por rodada.
            </CardC>
            <CardC
                img="/imagens/Passado_e_futuro.webp" 
                nome="Passado e Futuro"
                raridade="&#9733;&#9733;&#9733;&#9733;"
                caminho="A Harmonia"
                imgCaminho="/imagens/Caminho_harmonia.webp" 
                pv="952"
                atq="423"
                def="396"
                passiva="Pipas do passado"
            >
                Quando o usuário usa a sua Perícia, o próximo aliada a agir(exceto o próprio usuário) causa 16% a mais de Dano por 1 rodada.
            </CardC>
            
        </div>
    </div>
);

export default Cones;