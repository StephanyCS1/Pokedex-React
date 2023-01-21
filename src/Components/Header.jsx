import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../Context/PokemonContext'

export const Header = () => {

  const { onChange, valueSearch, onReset } = useContext(PokemonContext);

  const nav = useNavigate()

  const onSubmit = e => {
    e.preventDefault(); //evitar el refresh de la pag
    nav('/search', {
      state: valueSearch
    })

    onReset();
  }

  return (
    <div>

      <header className="container-header">
        <Link to='/' className="pokeball">
          <img className='pokeball'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png'
            alt='pokeball'
            width={'60px'} height={'60px'}
          />
        </Link>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              className='valueSearch'
              type='search'
              name='valueSearch'
              id=''
              onChange={onChange}
              value={valueSearch}
              placeholder='Buscar por nombre'
            />
          </div>
          <button className='btn btn-search'>Buscar</button>
        </form>
      </header>

      <Outlet />
    </div>
  )
}
