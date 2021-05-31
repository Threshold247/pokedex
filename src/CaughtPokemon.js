import React, { useState } from "react";

let CaughtPokemon = (props) => {
  const [caught, setState]=useState();
  function incrementCount () {
    setState(caught+1) //does not reference anywhere,replaced with list.length
  }
  /*function decrementCount () {
    setState(caught-1)
  }
  function resetCount () {
    setState(0)
  } */


  const pokeList=["Pikachu","Squirtle","Blastoise","Charzard"];
  const randomnPokemon= pokeList[Math.floor(Math.random() * pokeList.length)];

  const [list,setList] = useState([]);

  function addTolist () {
    setList(list.concat(randomnPokemon));
  };

  return (
    <p>Caught {list.length} Pokemon on {props.date}
      <button onClick={incrementCount}>Test</button>
      <button onClick={addTolist}>PokemonName</button>
        {list.map((pokemon,index)=> {
         return <li key={index}>{pokemon}</li>;
      })}
    </p>
  )
}

export default CaughtPokemon;
