import { useState } from 'react'
import Header from './Components/MenuItems/Header'
import Footer from './Components/MenuItems/Footer'
import GameBoard from './Components/Pages/GameBoard'
import './App.css'

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);





  return (
    <div className="App">
      
      <Header 
      score={score} 
      bestScore={bestScore} 
      />

      <GameBoard 
      score={score} 
      bestScore={bestScore}
      setScore={setScore} 
      setBestScore={setBestScore}  
      />

      <Footer />
    </div>
  )
}

export default App
