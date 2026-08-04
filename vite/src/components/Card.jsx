import React from 'react'
import './Card.css'

const Card = ({ img, brand, detail, price }) => {
    // const { img, brand, detail, price } = props.product;
  return (
    <article>
        <img src={img} alt="watch" />
        <h3>{brand}</h3>
        <p>{detail}</p>
        <span>{price}</span>
    </article>
  )
}


export default Card