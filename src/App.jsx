import './App.css' 
import { useState } from 'react'
import Counter from './Counter '
import Wheather from './Wheather'
import image from '../src/assets/pexels.png'

function App() {

  return (
    <>
    <div style={{backgroundImage:`url(${image})`} }>
    <Counter/>

    <Wheather/>
    </div>
    </>
  )
}

export default App
