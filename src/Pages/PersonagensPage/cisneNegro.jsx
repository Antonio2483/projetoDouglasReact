import React, { useState } from "react";
import Header from "../../components/Header"
import Container from "../../components/ContainerFull"
import ContainerSide from "../../components/ContainerSide"
import ContainerMain from "../../components/ContainerMain"
import CardP from "../../components/CardP"
import CharTable from "../../components/CharTable"
import "./Style.css"

export default function CisneNegro() {

    const [activeTab, setActiveTab] = useState('tab1');

    function openTab(tabName) {
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

    return (
        <div>
            <Header />
            <div className="char-container">
                <ContainerSide>
                    <img src="/imagens/Cisne_Negro.png" alt="Cisne Negro" className="char-img" />
                    <CharTable
                        nome="Cisne Negro"
                        frase="Ondulações Refletidas"
                        raridade="&#9733;&#9733;&#9733;&#9733;&#9733;"
                        imgCaminho="/imagens/Caminho_inexistencia_Transparente.webp"
                        caminho="A Inexistência"
                        elemento="Vento"
                        imgElemento="/imagens/Vento_elemento.webp"
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

                    <div id="tab1" className="tabcontent" style={{ display: "block" }}>
                        <h3>Percepção, Amanhecer Silencioso</h3>
                        [Alvo Único]
                        <p>Causa Dano de Vento médio, escalando com o ATQ de Cisne Negro a um único inimigo-alvo, com uma chance-base média de inflingir 1 acúmulo de Arcana.</p>
                        <p>Caso o inimigo-alvo esteja atualmente afligido com Cisalhamento de Vento, Sangramento, Queimadura ou Choque, cada efeito possui uma chance-base média de aplicar adicionalmente 1 acúmulo de Arcana no inimigo.</p>
                    </div>

                    <div id="tab2" className="tabcontent" style={{ display: "none" }}>
                        <h3>Decadência, Falso Crepúsculo</h3>
                        [Explosão]<br />
                        Custo de Pontos de Perícia: 1

                        <p>Causa Dano de Vento médio, escalando com o ATQ de Cisne Negro a um único inimigo-alvo e a quaisquer alvos adjacentes.</p>
                        <p>Ao mesmo tempo, e inflige 1 acúmulo de Arcana no inimigo-alvo e nos alvos adjacentes.</p>
                        <p>E ainda reduz a DEF do inimigo-alvo e alvos adjacentes em uma chance baixa, durando por 3 rodada(s).</p>
                    </div>

                    <div id="tab3" className="tabcontent" style={{ display: "none" }}>
                        <h3>Benção do Abraço de Outro Mundo</h3>
                        [Área]<br />
                        Custo de Energia: 120
                        <p>Inflige Epifania em todos os inimigos por 2 rodada(s).</p>
                        <p>Os inimigos afetados por Epifania recebem um pouco a mais de Dano em suas rodadas, e seu efeito de Arcana é levado em conta como efeito de Cisalhamento de Vento, Sangramento, Queimadura e Choque.</p>
                        <p>Além disso, quando seu efeito de Arcana é acionado no início da próxima rodada, os acúmulos de Arcana não são redefinidos. O efeito de não-redefinição de acúmulos pode ser acionado até 1 vez(es) durante o período da Epifania, e suas cargas são preenchidas quando a Epifania é aplicada novamente.</p>
                        <p>Causa Dano de Vento médio, escalando com o ATQ da Cisne Negro em todos os inimigos.</p>
                    </div>

                    <div id="tab4" className="tabcontent" style={{ display: "none" }}>
                        <h3>Capricho do Tear do Destino</h3>
                        [Incapacitação]
                        <p>Cada vez que um inimigo recebe Dano Contínuo no início de cada rodada, há uma chance-base média dele ser afligido com Arcana.</p>
                        <p>Enquanto estiver sob efeito de Arcana, inimigos-alvo recebem Dano de Vento Contínuo médio, escalando com o ATQ de Cisne Negro no início de cada rodada. Cada acúmulo de Arcana aumenta pouco este multiplicador de Dano Contínuo. Então, Arcana é redefinido para 1 acúmulo. Arcana pode acumular até 50 vezes.</p>
                        <p>Apenas quando Arcana causa Dano no início da rodada do inimigo-alvo, Cisne Negro ativa efeitos adicionais com base no número de acúmulos de Arcana infligidos no alvo:</p>
                        <p>Ao ter 3 ou mais acúmulos de Arcana, causa Dano de Vento Contínuo médio, escalando com o ATQ de Cisne Negro aos alvos adjacentes, com uma chance-base média de infligir 1 acúmulo de Arcana em alvos adjacentes.</p>
                        <p>Quando tiver 7 ou mais acúmulos de Arcana, permite que o Dano Contínuo atual causado dessa vez ignore um pouco da DEF do alvo e alvos adjacentes.</p>
                    </div>

                    <div id="tab5" className="tabcontent" style={{ display: "none" }}>
                        <h3>De Farsa à Verdade</h3>
                        [Aprimoramento]
                        <p>Depois que esta Técnica é utilizada, inflinge 1 acúmulo de Arcana em cada inimigo no início da próxima batalha. Para cada aplicação bem-sucedida de Arcana em um alvo, inflige outro acúmulo de Arcana no mesmo alvo.</p>
                        <p>Esse processo se repete até que a aplicação de Arcana falhe neste alvo. Para cada aplicação sucessiva de Arcana em um alvo, sua chance-base de sucesso é média, comparando com a chance-base da aplicação bem-sucedida anterior de Arcana nesse alvo.</p>
                    </div>
                </ContainerMain>
            </div>
        </div>
    )
}