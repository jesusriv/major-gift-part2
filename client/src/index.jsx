import React from 'react';
import { createRoot } from 'react-dom/client'
import './global.scss'

import Menus from './components/Menus'
import Tanks from './components/Tanks.jsx'

const container = document.getElementById('app')
const root = createRoot(container)

function App() {
  return (
    <div className='screen'>
      <Menus />
      <Tanks />
    </div>
  )
}

root.render(<App />)
