import React, { useContext, useState, useEffect } from 'react'
import BasketItem from '../BasketItem/index.jsx'
import waiter from '../../assets/waiter.png'
/* Styles */
import './styles.styl'

/* Context */
import { Context } from '../../Context'

/* Services */
import orderDetailsService from '../../services/orderDetails.js'
import orderService from '../../services/order.js'

/* Components */
import Modal from '../Modal/index.jsx'

const OrderStatus = () => {
  const { ActionTypes, updateAction, order } = useContext(Context)
  const [orderItems, setOrderItems] = useState([])
  const [change, setChange] = useState(true)
  const [showModal, setShowModal] = useState(false)

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
        button={false}
        setChange=""
        change=""
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

  const handleModal = () => {
    setShowModal(true)
  }

  const handleFinish = () => {
    return orderService.finish(order)
      .then(setShowModal(false))
      .then(updateAction(ActionTypes.BASE))
  }

  return (
    <section className="orderStatus">
      <i onClick={() => updateAction(ActionTypes.BASKET)} className="fas fa-arrow-circle-left arrow" />
      <div className="orderStatus__itemsContainer">
        {itemList}
      </div>
      {finishButton() && <button onClick={handleModal} className="orderStatus__end">Finish order</button>}
      {showModal &&
        <Modal
          title="Do you want to finish the order?"
          image={waiter} subtitleA="Total"
          subtitleB="$555"
          last="It was an honor to be with you."
          buttons="true"
          buttonA="Continue"
          handleClickB={handleFinish}
          hideModal={() => setShowModal(false)}
          to="/tables"
        />}

    </section>
  )
}

export default OrderStatus
