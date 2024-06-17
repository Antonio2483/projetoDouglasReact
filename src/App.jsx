import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// Rota

import Rotas from './components/Rotas';

// Componentes

import Header from './components/Header'; 

const App = () => (
  <div className='App'>
    <Rotas />
  </div>
)

export default App
