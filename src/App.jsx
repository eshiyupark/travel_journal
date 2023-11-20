import React from 'react'
import data from './data.js'

import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <div className='cards--container'>
        {cards}
      </div>
    </>
  )
}

export default App
