import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";

const Pokemon = ({ name, PokemonIndex }) => {
  return (
    <Card className="PokemonCard">
      <CardContent>
        <Avatar
          aria-label="indexPokemon"
          style={{
            backgroundColor: "#970707d6",
            fontWeight: "bold"
          }}
        >
          {PokemonIndex}
        </Avatar>
        <h2>{name}</h2>

        <img
          alt={`This is the pokemon ${name}`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonIndex}.png`}
        />
      </CardContent>
    </Card>
  );
};

export default Pokemon;
