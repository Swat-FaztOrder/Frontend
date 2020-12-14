import React from 'react'
import { Link } from 'react-router-dom'

import './styles.styl'

const OrderDetails = ({ handleButton, button, image, title1, title2, subtitle1, subtitle2 }) => {
  return (
    <div className="orderDetails">
      <img src={image} alt="" />
      <div className="orderDetails__waiter">
        <span>{subtitle1}</span>
        <h2>{title1}</h2>
      </div>
      <div className="orderDetails__table">
        <span>{subtitle2}</span>
        <h2>{title2}</h2>
      </div>
      {button === 'true' &&
        <Link to="/tables" onClick={handleButton} className="button">
          Delete Order
        </Link>
      }
    </div>
  )
}

export default OrderDetails
