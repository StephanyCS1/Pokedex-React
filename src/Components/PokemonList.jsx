import React, { useContext } from 'react'
import { PokemonContext } from '../Context/PokemonContext'
import { Card } from './Card'
import { Loader } from './Loader'

export const PokemonList = () => {

    const { thirtyPokemons, loading, findPokemons } = useContext(PokemonContext)


    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className='container card-list-pokemon'>
                    {findPokemons.length ? (
                        <>
                            {
                                findPokemons.map(pokemon => (
                                    <Card pokemon={pokemon} key={pokemon.id} />
                                ))
                            }
                        </>
                    ) : (
                        <>
                            {
                                thirtyPokemons.map(pokemon => (
                                    <Card pokemon={pokemon} key={pokemon.id} />
                                ))
                            }
                        </>
                    )
                    }
                </div>
            )}
        </>
    )
}
