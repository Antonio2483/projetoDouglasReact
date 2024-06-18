import React, {useState} from "react";
import Header from "../../components/Header"
import Container from "../../components/ContainerFull"
import ContainerSide from "../../components/ContainerSide"
import ContainerMain from "../../components/ContainerMain"
import CardP from "../../components/CardP"
import CharTable from "../../components/CharTable"
import "./Style.css"

export default function Sparkle(){

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
                <img src="/imagens/sparkle_card.webp" alt="Sparkle" className="char-img" />
                <CharTable 
                    nome="Sparkle"
                    frase="Esplendor Reluzente"
                    raridade="&#9733;&#9733;&#9733;&#9733;&#9733;"
                    imgCaminho="/imagens/Caminho_harmonia.webp"
                    caminho="A Harmonia"
                    elemento="Quântico"
                    imgElemento="/imagens/quantico.png"
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
                <h3>Monodrama</h3>
                [Alvo Único]
                <p>Causa Dano Quântico médio, escalando com o ATQ de Sparkle a um único inimigo-alvo</p>
                </div>

                <div id="tab2" className="tabcontent" style={{display:"none"}}>
                <h3>Mergulhadora de Sonhos</h3>
                [Suporte]<br/>
                Custo de Pontos de Perícia: 1

                <p>Aumenta o Dano de CRIT de um único aliado-alvo um pouco, em relação ao do Dano CRIT de Sparkle + uma baixa porcentagem por 1 rodada. E ao mesmo tempo, Avança Adiante a ação deste aliado em uma chance média. </p>
                <p>Quando Sparkle usa essa habilidade em si, sua ação não será Avançada Adiante.</p>
                </div>

                <div id="tab3" className="tabcontent" style={{display:"none"}}>
                <h3>A Heroína de Mil Faces</h3>
                [Suporte]<br />
                Custo de Energia: 120
                <p>Recupera 4 pontos de Perícia para a equipe e concede Criptografia a todos os aliados.</p>
                <p>Quando aliados em Criptografia ativam o efeito de Bônus de Dano concedido pelo Talento de Sparkle, cada acúmulo aumento adicionalmente seu efeito em uma chance baixa, durando por 2 rodadas.</p>
                </div>

                <div id="tab4" className="tabcontent" style={{display:"none"}}>
                <h3>Pista Falsa</h3>
                [Suporte]
                <p>Enquanto Sparkle estiver no campo de batalha, aumenta adicionalmente o número máximo de Pontos de Perícia em 2. Sempre que um aliado consome 1 Ponto de Perícia, o Dano causado por todos os aliados será aumentado em uma chance baixa.</p>
                <p>Este efeito dura por 2 Rodadas e pode ser acumulado até 3 vezes.</p>
                </div>

                <div id="tab5" className="tabcontent" style={{display:"none"}}>
                <h3>Narradora Nada Confiável</h3>
                [Suporte]
                <p>Usar a Técnica oferece a todos os aliados Desorientação por 20 Segundos.</p>
                <p>Personagens em Desorientação não serão percebidos por inimigos, e entrar em batalha enquanto estão no estado de Desorientação recupera 3 Ponto(s) de Perícia para a equipe.</p>
                </div>
            </ContainerMain>
        </div>
    </div>
    )
}