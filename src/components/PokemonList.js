import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { BrowserRouter as Route, Link } from "react-router-dom";
import Pokemon from "./Pokemon";
import axios from "axios";

const PokemonList = () => {
  const ApiURL = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line
  }, []);

  const getPokemons = async () => {
    const response = await axios.get(ApiURL);
    const data = response.data;
    setPokemons(data.results);
  };

  return (
    <div className="PokemonList">
      <div className="Container">
        {pokemons.map(pokemon => (
          <Link
            key={pokemon.name}
            to={`/pokemon/${pokemon.url.match(/([^/]*)\/*$/)[1]}`}
          >
            <Pokemon
              key={pokemon.name}
              name={
                pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
              }
              PokemonIndex={pokemon.url.match(/([^/]*)\/*$/)[1]}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default PokemonList;
