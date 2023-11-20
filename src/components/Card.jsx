import React from 'react'

export default function Card(props) {
  return (
    <div>
      <img src={props.item.imageUrl} alt="Travel Photo" className='card--image'/>
      <div className='card--content'>
        
      </div>
    </div>
  )
}
