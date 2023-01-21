import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.id}`} className='card-container'>
            <ul className='pokemons-container'>
                <div className="card">
                    <div className="img">
                        <img src={pokemon.sprites.other.home.front_default} className="card_image" alt={pokemon.name} />
                    </div>
                    <div className="card__overlay">
                        <div className="card__header">
                            <div className="card_header-text" id='texto'>
                                <h2 className="card_title">{pokemon.name}</h2>
                            </div>
                            <div className='card-types' id='texto'>
                                {pokemon.types.map(item => (
                                    <span key={item.type.name} className={item.type.name}>
                                        {item.type.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </Link>
    )
}
