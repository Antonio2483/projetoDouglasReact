import React from "react";
import Header from "../../components/Header"
import "./Style.css"



const Home = () => (
    <div>
        <Header />
        <div className="home-img">
            <img src="/imagens/Honkai_Logo.webp" alt="Honkai: Star Rail" /></div>
        <div className="home-texto">
            <h1>Bem Vindo ao Expresso Astral!</h1>
            <p>"Honkai: Star Rail" é um jogo eletrônico de RPG desenvolvido pela HoYoverse (anteriormente conhecida como miHoYo),
                a mesma empresa por trás de "Genshin Impact". Lançado em 2023, o jogo combina elementos de estratégia e
                combate por turnos com uma narrativa envolvente e rica em detalhes.</p>
            <p>O jogo se passa em um universo de ficção científica onde os jogadores embarcam em uma jornada espacial a bordo do Astral Express,
                um trem interestelar. Eles exploram diversos planetas e encontram personagens únicos, cada um com suas próprias habilidades e histórias.
                A mecânica do jogo envolve a formação de equipes de personagens, cada um com habilidades distintas, para enfrentar inimigos em batalhas táticas.</p>
            <p>"Honkai: Star Rail" é conhecido por seus gráficos de alta qualidade, design de personagens detalhado e uma trilha sonora envolvente,
                criando uma experiência imersiva para os jogadores. Além disso, o jogo oferece eventos sazonais,
                missões diárias e diversas atividades que mantêm os jogadores engajados e incentivam a exploração contínua do universo do jogo.</p><br />
            <p>Nosso site tem o intuíto de mostrar um pouco sobre jogo, com alguns personagens e informações sobre ele. Caso queira mais informações
                acesse o site oficial e divirta-se explorando esse maravilhoso mundo.
            </p><br />
            <a href="https://hsr.hoyoverse.com/pt-pt/" target="_blank" rel="noopener noreferrer"><button>Site Oficial</button></a>
        </div>
        <div className="home-herta-img">
            <img src="/imagens/Herta_Kuru.gif" alt="Herta KURU KURU" />
        </div>
    </div>
);

export default Home;