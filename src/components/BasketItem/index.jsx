import React from 'react'

import './styles.styl'

const BasketItem = ({ price, quantity, title, image }) => {
  return (
    <div className="basketItem">
      <img src={image} alt="" className="basketItem--image" />
      <div className="basketItem--details">
        <h2>{title}</h2>
        <span className="quantity">x{quantity}</span>
      </div>
      <h2 className="basketItem--price">${price}</h2>
    </div>
  )
}

export default BasketItem
