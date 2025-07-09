import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'

function App() {
  return (
    <div className="App-Container">
    <h1 style={{backgroundColor: 'lightblue'}}>Mern Frontend</h1>
    <Home age={21}/>    
    {/* <Home age={2}/> */}
    <h1 style={{backgroundColor: 'lightblue'}}>This is footer</h1>
    </div>
  )
}

export default App
