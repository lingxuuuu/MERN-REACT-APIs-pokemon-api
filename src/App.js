import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  
  const [pokemon, setPokemon] = useState([]);

  /*
    useEffect(() => {
    handleClick();
  }, [])

  */

  const handleClick = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then( response => { return response.json() })
    .then( response => { setPokemon(response.results) })
    .catch( err => { console.log(err) });
    }

    /* use axios: need to install and import first

    const getPokemonAxios = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
          .then(res => {
            console.log(res.data.results);
            setPrev(res.data.previous);
            setNext(res.data.next);
            setPokemon(res.data.results);
          })
          .catch(err => {
            console.log(err);
          })
  }
    */


  return (
    <div className="App">
       <button onClick={handleClick} >Fetch Pokemon</button>
       <ul>
         {pokemon.map( (poke, idx) => <li>{poke.name}</li>)}
       </ul>
    </div>
  );
}

export default App;
