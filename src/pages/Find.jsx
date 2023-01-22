import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from '../Components'
import { Loader } from '../Components/Loader'
import { PokemonContext } from '../Context/PokemonContext'


export const Find = () => {

  const location = useLocation()

  const { loading, listPokemons } = useContext(PokemonContext)

  const filtered = listPokemons.filter(pokemon => pokemon.name.includes(location.state.toLowerCase()));

  return (
    <>
      {
        loading ? (
          <Loader />
        )
          : (
            <div className='container-find'>
              <p>Existen <span>{filtered.length}</span> pokemons</p>

              <div className="card-list-pokemon conteiner">
                {filtered.map(pokemon => <Card pokemon={pokemon} key={pokemon.id} />)}
              </div>
            </div>
          )
      }
    </>
  )
}