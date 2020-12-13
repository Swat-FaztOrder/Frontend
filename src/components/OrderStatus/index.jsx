import React, { useContext, useState, useEffect } from 'react'

/* Styles */
import './styles.styl'

/* Context */
import { Context } from '../../Context'

/* Services */
import orderDetailsService from '../../services/orderDetails.js'

const OrderStatus = () => {
  const { ActionTypes, updateAction, order } = useContext(Context)
  const [orderItems, setOrderItems] = useState([])
  const [change, setChange] = useState(true)

  useEffect(() => {
    return orderDetailsService.getAll(order)
      .then(data => setOrderItems(data))
  }, [change])

  const handleClick = (dish) =>{
    console.log(dish)
    return orderDetailsService.served(dish.id)
      .then(() => setChange(!change))
  }

  const itemList = orderItems.map(item => {
    return (
      <div className="orderStatus__itemsContainer--item" key={item.id} >
        <h1>{item.dish.name}</h1>
        <h1>{item.status}</h1>
        {item.status === 'ready-to-serve' && <input onClick={() => handleClick(item)} type="checkbox" name="" id=""/>}
      </div>
    )
  })
  console.log(orderItems)

  return (
    <section className="orderStatus">
      <i onClick={() => updateAction(ActionTypes.BASKET)} className="fas fa-arrow-circle-left arrow" />
      <div className="orderStatus__itemsContainer">
        {itemList}
      </div>
    </section>
  )
}

export default OrderStatus
