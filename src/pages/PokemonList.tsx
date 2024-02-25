import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/PokemonCard';
import PokemonService from '../services/pokemon-services';
  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    PokemonService.getPokemons().then(pokemon => setPokemons(pokemon))
  }, []);
  
  return (
    <div>
        <h1 className="center">Pokédex</h1>
        <div className="container"> 
            <div className="row"> 
                {pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="blue"/>
                ))}
                </div>
        </div>
    </div> 
  ); 
}
  
export default PokemonList;