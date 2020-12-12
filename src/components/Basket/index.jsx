import React, { useContext, useState, useEffect } from 'react'
import orderDetailsService from '../../services/orderDetails.js'
import '../BasketItem/index.jsx'
import BasketItem from '../BasketItem/index.jsx'

import './styles.styl'

/* Context */
import { Context } from '../../Context'

const Basket = () => {
  const { order } = useContext(Context)
  const [dishes, setDishes] = useState([])

  const handleClick = () => {
    return console.log('hola')
  }

  useEffect(() => {
    const usedItemList = []
    return orderDetailsService.getAll(order)
      .then(data => data.map(item => {

        let count = 0

        data.forEach(plate => {
          if (plate.dish.id === item.dish.id) {
            count++
          }
        })

        if (!usedItemList.includes(item.dish.id)) {
          usedItemList.push(item.dish.id)
          return { id: item.id, price: item.dish.price, quantity: count, title: item.dish.name, image: item.dish.imageUrl }
        }
      }))
      .then(dish => setDishes(dish))
  }, [order]);

  const dishesList = dishes.map(dish => {
    if (dish?.id) {
      return <BasketItem key={dish?.id} price={dish?.price} quantity={dish?.quantity} title={dish?.title} image={dish?.image} />
    }
  })

  return (
    <div className="basket">
      <i className="fas fa-arrow-circle-left" />
      <div className="basketContainer">
        {dishesList}
      </div>
      <button className="basket__send" onClick={handleClick}>
        Send order
      </button>
    </div>
  )
}

export default Basket
