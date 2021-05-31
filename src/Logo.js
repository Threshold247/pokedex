import React from "react";


let Logo = (props) => {

  /*const appName="[YOUR_NAME]'s";*/
  console.log(props);
  return (
    <header>
    <h1>Welcome to {props.appName} Pokedex</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="pokemon bird" onClick={props.handleClick} />
    </header>
  );
};


export default Logo;
