import React from 'react';
import { Link } from 'react-router-dom'; 
import './Style.css';

const Header = ()  => (
        <header>
            <div className="logo">
                <Link to="/">Honkai Star Rail</Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/personagens">Personagens</Link></li>
                    <li><Link to="/cones">Cones de luz</Link></li>
                    <li><Link to="/aeons">Aeon</Link></li>
                    <li><Link to="/caminhos">Caminhos</Link></li>
                </ul>
            </nav>
        </header>
    );

export default Header;
