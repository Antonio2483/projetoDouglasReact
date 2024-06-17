import React, {useState} from "react";
import Header from "../../components/Header"
import Container from "../../components/ContainerFull"
import ContainerSide from "../../components/ContainerSide"
import ContainerMain from "../../components/ContainerMain"
import CardP from "../../components/CardP"
import CharTable from "../../components/CharTable"
import "./Style.css"

export default function Acheron(){

    const [activeTab, setActiveTab] = useState('tab1');

    function openTab(tabName){
        var i, tabcontent

        setActiveTab(tabName);
  
        tabcontent = document.getElementsByClassName("tabcontent");
        console.log(tabcontent);
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        document.getElementById(tabName).style.display = "block";
    }

    React.useEffect(() => {
        openTab(activeTab);
    }, []);

    return(
    <div>
        <Header />
        <div className="char-container">
            <ContainerSide>
                <img src="/imagens/acheron_1.webp" alt="Acheron" className="char-img" />
                <CharTable 
                    nome="Acheron"
                    frase="Palavras de Outrora"
                    raridade="&#9733;&#9733;&#9733;&#9733;&#9733;"
                    imgCaminho="/imagens/Caminho_inexistencia_Transparente.webp"
                    caminho="A Inexistência"
                    elemento="Raio"
                    imgElemento="/imagens/Elemento_Raio_Transparente.webp"
                    />
            </ContainerSide>
            <ContainerMain>
                <div className="tabs">
                <button className={`tablink ${activeTab === 'tab1' ? 'active' : ''}`} onClick={() => openTab('tab1')}>ATQ Base</button>
                <button className={`tablink ${activeTab === 'tab2' ? 'active' : ''}`} onClick={() => openTab('tab2')}>Perícia</button>
                <button className={`tablink ${activeTab === 'tab3' ? 'active' : ''}`} onClick={() => openTab('tab3')}>Perícia Sup.</button>
                <button className={`tablink ${activeTab === 'tab4' ? 'active' : ''}`} onClick={() => openTab('tab4')}>Talento</button>
                <button className={`tablink ${activeTab === 'tab5' ? 'active' : ''}`} onClick={() => openTab('tab5')}>Técnica</button>
                </div>

                <div id="tab1" className="tabcontent" style={{display:"block"}}>
                <h3>Caminhos Definhados Trilaterais</h3>
                [Alvo Único]
                <p>Causa Dano de Raio médio no alvo, escala com ATQ.</p>
                </div>

                <div id="tab2" className="tabcontent" style={{display:"none"}}>
                <h3>Brilho de Oito Trovões</h3>
                [Explosão]<br/>
                Custo de Pontos de Perícia: 1

                <p>Ganha 1 ponto(s) de Sonho Retalhado. Inflige 1 acúmulo(s) de Nó Rubro a um único inimigo-alvo e causa Dano de Raio igual 80% do ATQ de Acheron a este alvo, assim como Dano de Raio igual a 30% do ATQ de Acheron a alvos adjacentes.</p>
                </div>

                <div id="tab3" className="tabcontent" style={{display:"none"}}>
                <h3>Lágrimas Vermelhas do Sonho Retalhado</h3>
                [Área]<br />
                Custo de Energia: 120
                <p>Utiliza sequencialmente Lâmina Pluvial 3 vezes e Ressurreição Estígia 1 vez, causando Dano de Raio até 223% do ATQ de Acheron a um único inimigo-alvo, e causa Dano de Raio até de 180% do ATQ de Acheron a todos os outros inimigos.</p>
                <p>Lâmina Pluvial: Causa Dano de Raio igual a 14,4% do ATQ de Acheron a um único inimigo-alvo e remove até 3 acúmulos de Nó Rubro do alvo. 
                Quando o Nó Rubro é removido, imediatamente causa Dano de Raio igual a 9% do ATQ de Acheron a todos os inimigos. Para cada acúmulo de Nó Rubro removido, o Multiplicador de Dano desta aplicação de Dano é adicionalmente aumentado, até um aumento de 36%.</p>
                <p>Ressurreição Estígia: Causa Dano de Raio igual a 72% do ATQ de Acheron a todos os inimigos e remove todos os Nós Rubros.
                Nós Rubros não podem ser aplicados a inimigos durante a Perícia Suprema.</p>
                </div>

                <div id="tab4" className="tabcontent" style={{display:"none"}}>
                <h3>As Folhas de Outono Carregam Singularidades</h3>
                [Aprimoramento]
                <p>Quando Sonho Retalhado chega a 9 ponto(s), a Perícia Suprema pode ser utilizada. Durante a Perícia Suprema, reduz a Tenacidade dos inimigos independentemente dos Tipos de Fraquezas e reduz a RES a Todos os Tipos de todos os inimigos em 10%, durando até o final da Perícia Suprema.</p>
                <p>Quando qualquer unidade inflige penalidades a um inimigo-alvo enquanto usa sua habilidade, Acheron ganha 1 ponto de Sonho Retalhado e inflige 1 acúmulo de Nó Rubro no alvo. Se a habilidade utilizada infligir penalidade a múltiplos inimigos, então um acúmulo de Nó Rubro será infligido no inimigo-alvo com o maior número de acúmulos de Nó Rubro. Este efeito pode ser acionado até 1 vez por uso da habilidade.</p>
                <p>Quando Acheron está no campo de batalha e após um inimigo-alvo sair do campo de batalha ou ser derrotado por qualquer unidade, seus acúmulos de Nó Rubro serão redirecionados ao inimigo-alvo com o maior número de acúmulos de Nó Rubro em campo.</p>
                </div>

                <div id="tab5" className="tabcontent" style={{display:"none"}}>
                <h3>Ascendência Quadrivalente</h3>
                <p>Imediatamente ataca o inimigo. No início de cada onda, ganha Ascendência Quadrivalente, causando Dano de Raio igual a 200% do ATQ de Acheron a todos os inimigos e reduzindo a Tenacidade te todos os inimigos independentemente dos Tipos de Fraqueza. Ao infligir Quebra de Fraqueza, aciona o efeito de Quebra de Fraqueza de Raio.</p>
                <p>Ascendência Quadrivalente: depois de usar sua Perícia Suprema, Acheron ganha 1 ponto(s) de Sonho Retalhado e inflige 1 acúmulo(s) de Nó Rubro em um único inimigo aleatório.</p>
                <p>Se o ataque for realizado contra um inimigo normal, ele é derrotado imediatamente sem entrar em combate. Nenhum Ponto de Técnica será consumido caso nenhum inimigo seja atingido.</p>
                </div>
            </ContainerMain>
        </div>
    </div>
    )
}