import { useState } from 'react'
import Pokemoncard from './components/cardContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[id, setId] = useState(0);

  const chooseRandomId = () =>{
    const randomNumber = Math.floor(Math.random() * 1010);
    setId(randomNumber)
  }
  return (
    <>
      <div>
        <h1>Pokemon Randomizer</h1>
        <Pokemoncard pokeId={id}/>
        <button onClick={chooseRandomId}>Pick A Card</button>
      </div>
     
    </>
  )
}

export default App
