import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages

import Home from '../../Pages/HomePage/index.jsx';
import Personagens from '../../Pages/PersonagensPage/index.jsx';
import Cones from '../../Pages/ConesPage/index.jsx';
import Aeons from '../../Pages/AeonsPage/index.jsx';
import Caminhos from '../../Pages/CaminhosPage/index.jsx';

// Personagens

import Kafka from '../../Pages/PersonagensPage/kafka.jsx';
import Cisne from '../../Pages/PersonagensPage/cisneNegro.jsx';

export default function Rotas() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/personagens" element={<Personagens/>} />
            <Route path="/cones" element={<Cones/>} />
            <Route path="/aeons" element={<Aeons/>} />
            <Route path="/caminhos" element={<Caminhos/>} />
            

            {/* Personagens */}
            <Route path="/personagens/kafka" element={<Kafka/>} />
            <Route path="/personagens/cisne-negro" element={<Cisne/>} />
        </Routes>
    </BrowserRouter>
    );
}
