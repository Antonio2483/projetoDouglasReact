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
            <CardC
                img="/imagens/Ao_Longo_da_Margem_Transitoria.webp" 
                nome="Ao Longo da Margem Transitória"
                raridade="&#9733;&#9733;&#9733;&#9733;&#9733;"
                caminho="A Inexistência"
                imgCaminho="/imagens/Caminho_inexistencia.webp" 
                pv="1058"
                atq="635"
                def="396"
                passiva="Navegante"
            >
                Aumenta o Dano CRIT do usuário em 36%. 
                Quando o usuário atinge um inimigo-alvo, inflige Bolhas Vazias ao inimigo, durando por 1 rodada. 
                Este efeito pode ser acionado 1 vez contra cada alvo para cada ataque que o usuário realizar. 
                O usuário causa 24% a mais de Dano aos alvos afligidos por Bolhas Vazias, e o Dano da Perícia Suprema do usuário é aumentado adicionalmente em 24%.
            </CardC>
            
        </div>
    </div>
);

export default Cones;