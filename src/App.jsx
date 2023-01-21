import { useState } from 'react'
import { AppRouter } from './AppRouter'
import './App.css'
import { PokemonProvider } from './Context/PokemonProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider> 
  )
}

export default App
