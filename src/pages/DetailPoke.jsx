import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../Components/Loader'
import {firstUpperCase} from './letter'
import { PokemonContext } from '../Context/PokemonContext'

export const DetailPoke = () => {

  const { getInfo } = useContext(PokemonContext)

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})

  console.log(pokemon)
  const { id } = useParams()

  const fetchPokemon = async (id) => {
    const res = await getInfo(id)
    setPokemon(res)
    setLoading(false)
  }

  useEffect(() => {
    fetchPokemon(id)
  }, [])

  return (

    <main className='conteiner pokemon-Info'>
      {
        loading ? (
          <Loader />
        ) : (
          <section className='conteiner pokemon'>
            <div className='pokemon-info'>
              
              <img src={pokemon.sprites.other.home.front_default} className="card__image" alt={pokemon?.name} />
              <h1>{firstUpperCase(pokemon.name)}</h1>
              <h3>N° {pokemon.id}</h3>
              <div className='card-types info-pokemon-type'>
                <h3 className='subTitle'>Tipo de pokemon</h3>
                {pokemon.types.map(item => (
                  <span key={item.type.name} className={`${item.type.name}`}>
                    {item.type.name} 
                  </span>
                ))}
              </div>
              <div className='container-stats'>
                <h1>Estadísticas</h1>
                <div className='stats'>
                  <div className='stat-group'>
                    <span>Hp</span>
                    <div className='value-stat'></div>
                    <span className='counter-stat'>
                      {pokemon.stats[0].base_stat}
                    </span>
                  </div>
                  <div className='stat-group'>
                    <span>Attack</span>
                    <div className='value-stat'></div>
                    <span className='counter-stat'>
                      {pokemon.stats[1].base_stat}
                    </span>
                  </div>
                  <div className='stat-group'>
                    <span>Defense</span>
                    <div className='value-stat'></div>
                    <span className='counter-stat'>
                      {pokemon.stats[2].base_stat}
                    </span>
                  </div>
                  <div className='stat-group'>
                    <span>Special Attack</span>
                    <div className='value-stat'></div>
                    <span className='counter-stat'>
                      {pokemon.stats[3].base_stat}
                    </span>
                  </div>
                  <div className='stat-group'>
                    <span>Special Defense</span>
                    <div className='value-stat'></div>
                    <span className='counter-stat'>
                      {pokemon.stats[4].base_stat}
                    </span>
                  </div>
                  <div className='stat-group'>
                    <span>Speed</span>
                    <div className='value-stat'></div>
                    <span className='counter-stat'>
                      {pokemon.stats[5].base_stat}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        )
      }
    </main>
  )
}
