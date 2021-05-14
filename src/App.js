import React from "react"; // eslint-disable-next-line
import ReactDOM from "react-dom";

let Image= () => {
    return  <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png " alt="pokemon " />
}
/*function Paragraph () {
    return <p>This is a paragraph</p> 
}; */

function Header () {
    return <header></header>
};

function Test () {
    return (
    <div>
       <Logo />
       <BestPokemon />
       <CaughtPokemon />
    </div>
    );
};

export default Test;


let Logo = () => {
    const appName="Name's";
    
    return (
    <div>
        <Header />
        <h1>Welcome to {appName} Pokedex</h1>
        <Image />
        
    </div> 
    );
};

let BestPokemon = () => {
    let abilities=['Anticipation', 'Adaptability', 'Run-Away'];

    return (
    <div>    
        <p>My favorite Pokemon is Squirtle</p>
        <ul>
            {abilities.map((ability) => (
            <li>{ability}</li>))
            }    
        </ul>       
    </div>
    )       
};

let CaughtPokemon= () =>{
    let date =new Date().toLocaleDateString();
    
    return <p>Caught 0 Pokemon on {date}</p>
};