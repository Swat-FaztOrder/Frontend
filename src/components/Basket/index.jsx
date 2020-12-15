import React, { useContext, useState, useEffect } from 'react'
import '../BasketItem/index.jsx'
import BasketItem from '../BasketItem/index.jsx'

/* Styles */
import './styles.styl'

/* Context */
import { Context } from '../../Context'

/* Services */
import orderDetailsService from '../../services/orderDetails.js'
import orderService from '../../services/order.js'

/* i18n */
import { useTranslation } from 'react-i18next';

const Basket = () => {
  const { t } = useTranslation(['Basket'])
  const { order, updateAction, ActionTypes } = useContext(Context)
  const [dishes, setDishes] = useState([])
  const [dishess, setDishess] = useState([])
  const [change, setChange] = useState(false)

  const handleClick = () => {

    return orderService.send(order)
      .then(() => setChange(!change))
  }

  useEffect(() => {
    orderDetailsService.getAll(order)
      .then(data => setDishess(data))
  }, [change]);

  useEffect(() => {
    const usedItemList = []
    const dish = dishess.filter(plate => plate.status === 'ordered').map(item => {
      let count = 0
      dishess.filter(plate => plate.status === 'ordered').forEach(plate => {

        if (plate.dish.id === item.dish.id && plate.cycleInKitchen === item.cycleInKitchen) {
          count++
        }
      })
      if (!usedItemList.includes(item.dish.id)) {
        usedItemList.push(item.dish.id)
        return { id: item.id, price: item.dish.price, quantity: count, title: item.dish.name, image: item.dish.imageUrl, status: item.status }
      }
    })

    setDishes(dish)
  }, [dishess]);

  const dishesList = dishes.length > 0 ? dishes.map(dish => {
    if (dish?.id && dish?.status === 'ordered') {
      return <BasketItem key={dish?.id} id={dish?.id} price={`$${dish?.price}`} quantity={`x${dish?.quantity}`} title={dish?.title} image={dish?.image} button={true} change={change} setChange={setChange} />
    }
  }) : ''

  console.log(dishesList)
  return (
    <div className="basket">
      <div className="basket__icons">
        <i onClick={() => updateAction(ActionTypes.BASE)} className="fas fa-arrow-circle-left arrow" />
        {dishess.length > 0 && <i onClick={() => updateAction(ActionTypes.ORDER_STATUS)} className="fas fa-clipboard-list list"/>}
      </div>
      <div className="basketContainer">
        {dishesList.length > 0 ? dishesList : <h1 className="basket__message">{t('Basket:Dish', "You haven't added any dish to the order ")} :(</h1>}
      </div>
      {dishesList.length > 0 &&
        <button className="basket__send" onClick={handleClick}>
          {t('Basket:Order', 'Send order')}
        </button>
      }
    </div>
  )
}

export default Basket
