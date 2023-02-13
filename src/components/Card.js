import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <div className='card__body'>
         <img src = {props.src} alt='cars'/>   
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description}</p>
        </div>
        <button className='card__btn'>More Cars</button>
    </div>
  )
}
