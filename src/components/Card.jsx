import React from 'react'
import Mappin from '../../public/images/mappin.png'

export default function Card(props) {
  return (
    <div className='card'>
      <div className='card--image'>
        <img src={props.item.imageUrl} alt="Travel Photo"/>
      </div>
      <div className='card--content'>
        <div className='card--content--location'>
          <img src={Mappin} alt="Map Pin" />
          <p>{props.item.location}</p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className='card--content--title'>{props.item.title}</h2>
        <p>{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
