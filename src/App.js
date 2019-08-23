import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:PokemonIndex" component={PokemonDetails} />
      </Router>
    </div>
  );
};
export default App;
