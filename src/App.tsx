import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonList from './features/components/PokemonList';
import PokemonDetails from './features/components/PokemonDetails';
import './App.css'; 

const App: React.FC = () => (
  <Router>
    <div>
      <h1>Pokemon App</h1>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;
