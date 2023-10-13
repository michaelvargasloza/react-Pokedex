import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Items, Pokemon, Pokemons } from "./pages";

import Items from './pages/Items.tsx';
import Pokemon from './pages/Pokemon.tsx';
import Pokemons from './pages/Pokemons.tsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/pokemons/:name" element={<Pokemon />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/items" element={<Items />} />
          <Route path="/" element={<Pokemons />} />
        </Routes>           
      </div>
    </Router>    
  );
}

export default App;
