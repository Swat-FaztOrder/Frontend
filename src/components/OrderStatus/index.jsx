import React, { useContext, useState, useEffect } from 'react'
import BasketItem from '../BasketItem/index.jsx'
/* Styles */
import './styles.styl'

/* Context */
import { Context } from '../../Context'

/* Services */
import orderDetailsService from '../../services/orderDetails.js'
import Basket from '../Basket/index.jsx'

const OrderStatus = () => {
  const { ActionTypes, updateAction, order } = useContext(Context)
  const [orderItems, setOrderItems] = useState([])
  const [change, setChange] = useState(true)

  useEffect(() => {
    return orderDetailsService.getAll(order)
      .then(data => setOrderItems(data))
  }, [change])

  const handleClick = (dish) =>{
    return orderDetailsService.served(dish.id)
      .then(() => setChange(!change))
  }

  const itemList = orderItems.map(item => {
    return (
      <BasketItem
        key={item.id}
        price={item.status === 'ready-to-serve' ?
          <input onChange={() => handleClick(item)} type="checkbox" checked={false} name="" id=""/> :
          item.status === 'served' &&
            <input type="checkbox" checked={true} name="" id="" readOnly/>
        }
        quantity={item.status}
        title={item.dish.name}
        image={item.dish.imageUrl}
      />
    )
  })

  const finishButton = () =>{
    let showButton = true
    orderItems.forEach(item => {
      if (item.status !== 'served') {
        showButton = false
      }
    })

    return showButton
  }

  const handleFinish = () => {
    console.log('Order finished')
  }

  return (
    <section className="orderStatus">
      <i onClick={() => updateAction(ActionTypes.BASKET)} className="fas fa-arrow-circle-left arrow" />
      <div className="orderStatus__itemsContainer">
        {itemList}
      </div>
      {finishButton() && <button onClick={handleFinish} className="orderStatus__end">Finish order</button>}
    </section>
  )
}

export default OrderStatus
