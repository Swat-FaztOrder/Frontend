import React from 'react'
import waiter from '../../assets/waiter.png'

import './styles.styl'

const OrderDetails = () => {
  return (
    <div className="orderDetails">
      <img src={waiter} alt="" />
      <div className="orderDetails__waiter">
        <span>Waiter</span>
        <h2>Diego Valdez Acosta</h2>
      </div>
      <div className="orderDetails__table">
        <span>Table</span>
        <h2>8</h2>
      </div>
      <button>Finish order</button>
    </div>
  )
}

export default OrderDetails
