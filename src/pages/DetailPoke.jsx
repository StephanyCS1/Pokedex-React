import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Loader } from '../Components/Loader'
import { PokemonContext } from '../Context/PokemonContext'

export const DetailPoke = () => {

  const { getInfo } = useContext(PokemonContext)

  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState({})

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
              <div className='pokemon-info-detail'>
                <div className='title'>
                  <h3 id="title" className='id-pokemon' >N° {pokemon.id}</h3>
                  <h1 id="text" >{pokemon.name}</h1>
                </div>
                <div className='info-pokemon-type'>
                  <h3 id="title" >Tipo de pokemon</h3>
                  {pokemon.types.map(item => (
                    <h4 id="text" key={item.type.name} className={`${item.type.name}`}>
                      {item.type.name}
                    </h4>
                  ))}
                </div>
                <div className='pokemon-abilities'>
                  <h3 id="title" >Habilidades</h3>
                  {pokemon.abilities.map(item => (
                    <h4 id="text" key={item.ability.name} className={item.ability.name}>
                      {item.ability.name}
                    </h4>
                  ))}
                </div>
                <div className='container-stats'>
                  <h1 id="title" >Estadísticas</h1>
                  <div className='stats'>
                    <div className='stat-group'>
                      <span id="stat">Hp</span>
                      <div className='value-stat'></div>
                      <span id="text" className='counter-stat'>
                        {pokemon.stats[0].base_stat}
                      </span>
                    </div>
                    <div className='stat-group'>
                      <span id="stat">Attack</span>
                      <div className='value-stat'></div>
                      <span id="text" className='counter-stat'>
                        {pokemon.stats[1].base_stat}
                      </span>
                    </div>
                    <div className='stat-group'>
                      <span id="stat">Defense</span>
                      <div className='value-stat'></div>
                      <span id="text" className='counter-stat'>
                        {pokemon.stats[2].base_stat}
                      </span>
                    </div>
                    <div className='stat-group'>
                      <span id="stat">Special Attack</span>
                      <div className='value-stat'></div>
                      <span id="text" className='counter-stat'>
                        {pokemon.stats[3].base_stat}
                      </span>
                    </div>
                    <div className='stat-group'>
                      <span id="stat">Special Defense</span>
                      <div className='value-stat'></div>
                      <span id="text" className='counter-stat'>
                        {pokemon.stats[4].base_stat}
                      </span>
                    </div>
                    <div className='stat-group'>
                      <span id="stat">Speed</span>
                      <div className='value-stat'></div>
                      <span id="text" className='counter-stat'>
                        {pokemon.stats[5].base_stat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
                <div className='pokemon-img-detail'>
                  <img src={pokemon.sprites.other.home.front_default} className="card__image" alt={pokemon?.name} />
                </div>
            </div>
          </section>
        )
      }
    </main>
  )
}
