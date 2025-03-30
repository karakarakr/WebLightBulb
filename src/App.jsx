import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LightBulb from './components/LightBulb'
import LightSwitch from './components/LightSwitch'

function App() {
  return (
    <div className='lightbulb-container'>
      <LightBulb/>
      <LightSwitch/>
    </div>
  )
}

export default App