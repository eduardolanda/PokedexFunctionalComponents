import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { BrowserRouter as Route, Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import axios from "axios";

const PokemonDetails = props => {
  const ApiURL = `https://pokeapi.co/api/v2/pokemon/${
    props.match.params.PokemonIndex
  }`;
  const [abilities, setAbilities] = useState([]);
  const [name, setName] = useState(" ");
  const PokemonIndex = props.match.params.PokemonIndex;

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line
  }, []);

  const getPokemons = async () => {
    const response = await axios.get(ApiURL);
    const data = response.data;
    setName(data.forms[0].name);
    setAbilities(data.abilities);
  };
  return (
    <div>
      <Card style={{ maxWidth: "300px", margin: "0 auto", marginTop: "1rem" }}>
        <Avatar
          aria-label="indexPokemon"
          style={{ backgroundColor: "#970707d6", fontWeight: "bold" }}
        >
          {PokemonIndex}
        </Avatar>
        <h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <img
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonIndex}.png`}
        />
        <img
          alt="pokemon"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${PokemonIndex}.png`}
        />
        <List>
          {abilities.map(ability => (
            <ListItem
              key={ability.ability.name}
              style={{ textAlign: "center" }}
            >
              {ability.ability.name}
            </ListItem>
          ))}
        </List>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <Link to={`/pokemon/${Number(PokemonIndex) - 1}`}>
          <Card
            style={{
              width: "100px",
              margin: "10px",
              marginTop: "1rem"
            }}
          >
            <p>Last Pokemon</p>
            <img
              alt="pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(
                PokemonIndex
              ) - 1}.png`}
            />
          </Card>
        </Link>

        <Link to={`/pokemon/${Number(PokemonIndex) + 1}`}>
          <Card
            style={{
              width: "100px",
              margin: "10px",
              marginTop: "1rem"
            }}
          >
            <p>Next Pokemon</p>
            <img
              alt="pokemon"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${Number(
                PokemonIndex
              ) + 1}.png`}
            />
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetails;
