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

/* i18n */
import { useTranslation } from 'react-i18next';

const OrderStatus = () => {
  const { t } = useTranslation(['OrderStatus'])
  const { ActionTypes, updateAction, order } = useContext(Context)
  const [orderItems, setOrderItems] = useState([])
  const [change, setChange] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [orderDetails, setOrderDetails] = useState('')

  useEffect(() => {
    return orderDetailsService.getAll(order)
      .then(data => setOrderItems(data))
  }, [change])

  useEffect(() => {
    return orderService.get(order)
      .then(data => setOrderDetails(data))
  }, [change])

  const handleClick = (dish) =>{
    return orderDetailsService.served(dish.id)
      .then(() => setChange(!change))
  }

  const itemList = orderItems.map(item => {
    const statusTranslation = (status) => {
      switch (status) {
        case 'served':
          return t('OrderStatus:Served', 'Served')
        case 'ordered':
          return t('OrderStatus:Ordered', 'Ordered')
        case 'ready-to-prepare':
          return t('OrderStatus:Prepare', 'Ready to prepare')
        case 'preparing':
          return t('OrderStatus:Preparing', 'Preparing')
        case 'ready-to-serve':
          return t('OrderStatus:Serve', 'Ready to serve')
        default:
          return 'N/A'
      }

    }
    return (
      <BasketItem
        key={item.id}
        price={item.status === 'ready-to-serve' ?
          <input onChange={() => handleClick(item)} type="checkbox" checked={false} name="" id=""/> :
          item.status === 'served' &&
            <input type="checkbox" checked={true} name="" id="" readOnly/>
        }
        quantity={statusTranslation(item.status)}
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
          title={t('OrderStatus:Want', 'Do you want to finish the order?')}
          image={waiter}
          subtitleA="Total"
          subtitleB={`$${orderDetails.totalPrice.toFixed(2)}`}
          last={t('OrderStatus:Honor', 'It was an honor to be with you.')}
          buttons="true"
          buttonA={t('OrderStatus:Continue', 'Continue')}
          handleClickB={handleFinish}
          hideModal={() => setShowModal(false)}
          to="/tables"
        />}

    </section>
  )
}

export default OrderStatus
