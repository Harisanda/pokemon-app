import React, {FunctionComponent, useState} from 'react';
import { formatDate } from '../helpers/formatDate';
import { formatType } from '../helpers/formatType';
import Pokemon from '../models/pokemon';
import './PokemonCard.css';
import { useHistory } from 'react-router-dom';

type Props = {
    pokemon : Pokemon,
    borderColor?: string //facultative
}

const PokemonCard: FunctionComponent<Props> = ({pokemon , borderColor = "#009688"}) => {

    const [colors, setColors] = useState<string>();

    const history = useHistory();

    const showBorder = () => {
        setColors(borderColor);
    }

    const hideBorder = () => {
        setColors("#f5f5f5");
    }

    const goToPokemon = (id: number) => {
        history.push(`/pokemons/${id}`);
    }

    return (
        <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id)} onMouseOver={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{borderColor: colors}}>
                <div className="card-image"> 
                    <img src={pokemon.picture} alt={pokemon.name}/>
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p>{pokemon.name}</p>
                        <p><small>{formatDate(pokemon.created)}</small></p>
                        {pokemon.types.map((type) => (
                            <span key={type} className={formatType(type)}>{type}</span>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default PokemonCard; 