import React from "react";

let BestPokemon = (props) => {
  const {abilities} = props;

  return (
      <div>
        <p>My favourite Pokemon is Squirtle!</p>
          <ul>
            {abilities.map((ability,index) =>
              (<li key={index}>{ability}</li>)
            )}
          </ul>
      </div>
    );
};

export default BestPokemon;
