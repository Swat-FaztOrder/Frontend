import React, { useContext, useState, useEffect } from 'react'
import '../BasketItem/index.jsx'
import BasketItem from '../BasketItem/index.jsx'

import './styles.styl'

/* Context */
import { Context } from '../../Context'

/* Services */
import orderDetailsService from '../../services/orderDetails.js'
import orderService from '../../services/order.js'

const Basket = () => {
  const { order, updateAction, ActionTypes } = useContext(Context)
  const [dishes, setDishes] = useState([])
  const [dishess, setDishess] = useState([])

  const handleClick = () => {
    return orderService.send(order)
  }

  useEffect(() => {
    orderDetailsService.getAll(order)
      .then(data => setDishess(data))
  }, [order]);

  useEffect(() => {
    const usedItemList = []
    const dish = dishess.filter(plate => plate.status === 'ordered').map(item => {
      let count = 0
      dishess.filter(plate => plate.status === 'ordered').forEach(plate => {

        if (plate.dish.id === item.dish.id && plate.cycleInKitchen === item.cycleInKitchen) {
          count++
        }
      })
      console.log(count)
      if (!usedItemList.includes([item.dish.id, item.cycleInKitchen])) {
        usedItemList.push([item.dish.id, item.cycleInKitchen])
        return { id: item.id, price: item.dish.price, quantity: count, title: item.dish.name, image: item.dish.imageUrl, status: item.status }
      }
    })
    console.log('used', usedItemList)

    setDishes(dish)
  }, [dishess]);

  console.log('dishes', dishes)
  console.log('dishess', dishess)

  const dishesList = dishes.length > 0 ? dishes.map(dish => {
    if (dish?.id && dish?.status === 'ordered') {
      return <BasketItem key={dish?.id} price={`$${dish?.price}`} quantity={`x${dish?.quantity}`} title={dish?.title} image={dish?.image} />
    }
  }) : ''

  return (
    <div className="basket">
      <div className="basket__icons">
        <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left arrow" />
        {dishes.length > 0 && <i onClick={() => updateAction(ActionTypes.ORDER_STATUS)} className="fas fa-clipboard-list list"/>}
      </div>
      <div className="basketContainer">
        {dishesList.length > 0 ? dishesList : <h1 className="basket__message">You haven't added any dish to the order :(</h1>}
      </div>
      {dishesList.length > 0 &&
        <button className="basket__send" onClick={handleClick}>
          Send order
        </button>
      }
    </div>
  )
}

export default Basket
