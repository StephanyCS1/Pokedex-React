import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from '../Components'
import { PokemonContext } from '../Context/PokemonContext'


export const Find = () => {

  const location = useLocation()

  const { listPokemons } = useContext(PokemonContext)

  const filtered = listPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

  return (
    <div className='container-find'>
      <p>Exsten <span>{filtered.length}</span> pokemons</p>

      <div className="card-list-pokemon conteiner">
        {filtered.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  )
}
