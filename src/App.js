import React from "react"; // eslint-disable-next-line
import ReactDOM from "react-dom";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const abilities=['Anticipation', 'Adaptability', 'Run-Away'];
const date = new Date().toLocaleDateString();
function logWhenClicked () {
  console.log("message")
}


const App = (props) => {

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date}/ >
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
    );
};

export default App;
