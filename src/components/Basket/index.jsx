import React, { useContext } from 'react'
import orderService from '../../services/order.js'
import '../BasketItem/index.jsx'
import BasketItem from '../BasketItem/index.jsx'

import './styles.styl'

/* Context */
import { Context } from '../../Context'

const Basket = () => {
  const { order } = useContext(Context)

  const handleClick = () => {
    return console.log('hola')
  }
  console.log(order)
  return (
    <div className="basket">
      <i className="fas fa-arrow-circle-left" />
      <div className="basketContainer">
        <BasketItem price="5.99" quantity="1" title="Lorem ipsum" image="https://i.imgur.com/gfMP09b.jpg" />
      </div>
      <button className="basket__send" onClick={handleClick}>
        Send order
      </button>
    </div>
  )
}

export default Basket
