import React from 'react'

import './styles.styl'

import orderDetailsService from '../../services/orderDetails.js'

const BasketItem = ({ id, price, quantity, title, image, button, change, setChange }) => {

  const handleClick = () => {
    orderDetailsService.delete(id)
      .then(() => setChange(!change))
  }

  return (
    <div className="basketItem">
      <div className="basketItem__image">
        <img src={image} alt="" />
      </div>
      <div className="basketItem__details">
        <h2>{title}</h2>
        <span className="quantity">{quantity}</span>
      </div>
      <h2 className="basketItem__price">{price}</h2>
      {button && <i onClick={handleClick} className="fas fa-times-circle basketItem__delete"/>}
    </div>
  )
}

export default BasketItem
