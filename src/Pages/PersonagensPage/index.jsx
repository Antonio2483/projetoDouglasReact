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
        </div>
    </div>
);

export default Personagem;