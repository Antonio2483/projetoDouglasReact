import React from "react";
import Header from "../../components/Header"
import CardP from "../../components/CardP"
import "./Style.css"

const Personagem = () => (
    <div>
        <Header />
        <div className="card-grid">
            <CardP img="imagens/Cisne_negro.webp" nome="Cisne Negro" elemento="Vento" caminho="Inexistência" to="cisne-negro"/>
            <CardP img="imagens/Kafka.jpg" nome="Kafka" elemento="Raio" caminho="Inexistência" to="kafka"/>
            <CardP img="imagens/acheron.webp" nome="Acheron" elemento="Raio" caminho="Inexistência" to="acheron"/>
            <CardP img="imagens/sparkle.jpg" nome="Sparkle" elemento="Quântico" caminho="Harmonia" to="sparkle"/>
        </div>
    </div>
);

export default Personagem;