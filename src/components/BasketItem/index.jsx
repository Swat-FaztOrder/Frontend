import React from 'react'

import './styles.styl'

const BasketItem = ({ price, quantity, title, image }) => {
  return (
    <div className="basketItem">
      <div className="basketItem__image">
        <img src={image} alt="" />
      </div>
      <div className="basketItem__details">
        <h2>{title}</h2>
        <span className="quantity">x{quantity}</span>
      </div>
      <h2 className="basketItem__price">${price}</h2>
    </div>
  )
}

export default BasketItem
