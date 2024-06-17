import React, {useState} from "react";
import Header from "../../components/Header"
import Container from "../../components/ContainerFull"
import ContainerSide from "../../components/ContainerSide"
import ContainerMain from "../../components/ContainerMain"
import CardP from "../../components/CardP"
import CharTable from "../../components/CharTable"
import "./Style.css"

export default function CisneNegro(){

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
                <img src="/imagens/Kafka2.jpg" alt="Kafka" className="char-img" />
                <CharTable 
                    nome="Kafka"
                    frase="Noites em claro"
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
                <h3>Tumulto da Meia-noite</h3>
                [Alvo Único]
                <p>Causa Dano de Raio médio no alvo, escala com ATQ.</p>
                </div>

                <div id="tab2" className="tabcontent" style={{display:"none"}}>
                <h3>Luar Carinhoso</h3>
                [Explosão]<br/>
                Custo de Pontos de Perícia: 1

                <p>Causa Dano de Raio alto no alvo principal, e Dano de Raio baixo nos inimigos adjacentes. Escala com ATQ.</p>
                <p>Se o alvo principal estiver sendo afetado por Dano Contínuo, ele sofre imediatamente o dano respectivo do dano contínio</p>
                </div>

                <div id="tab3" className="tabcontent" style={{display:"none"}}>
                <h3>Vibração do crepúsculo</h3>
                [Área]<br />
                Custo de Energia: 120
                <p>Causa Dano de Raio Médio em todos os inimigos, e inflinge um Choque especial. Inimigos afetados pelo choque recebem imadiatamente Dano de Raio Médio.</p>
                <p>O Choque dura 2 rodadas, enquanto em Choque, inimigos recebem Dano de Choque Massivo no início de cada rodada.</p>
                <p>Todos os Danos causados pela Perícia Suprema escalam com ATQ.</p>
                </div>

                <div id="tab4" className="tabcontent" style={{display:"none"}}>
                <h3>Gentil, Mas Cruel</h3>
                [Alvo Único]
                <p>Após um aliado atingir um inimigo sob o efeito de qualquer Dano Contínuo, Kafka imediatamente realiza 1 <u>Ataque Extra</u>, causando Dano de Raio Médio
                e inflingindo o mesmo Choque da Perícia Suprema. Escala com ATQ.</p>
                </div>

                <div id="tab5" className="tabcontent" style={{display:"none"}}>
                <h3>Misericórdia não é perdão</h3>
                <p>Ataca todos os inimigos em uma grande área, depois de entrar em batalha, causa Dano de Raio Baixo, e inflinge Choque igual ao aplicado pela Perícia Suprema a todos os inimigos. Escala com ATQ.</p>
                </div>
            </ContainerMain>
        </div>
    </div>
    )
}