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

  useEffect(() => {
    return orderDetailsService.getAll(order)
      .then(data => setOrderItems(data))
  }, [order])

  const handleClick = (dish) =>{
    console.log(dish)
  }

  const itemList = orderItems.map(item => {
    return (
      <div className="orderStatus__itemsContainer--item" key={item.id} >
        <input onClick={() => handleClick(item)} type="checkbox" name="" id=""/>
        <h1>{item.dish.name}</h1>
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
