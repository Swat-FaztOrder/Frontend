import React, { useContext, useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import KitchenOrderCard from '../../components/KitchenOrderCard/index.jsx'
// import KitchenModal from '../../components/KitchenModal/index.jsx'
import waiter from '../../assets/waiter.png'
import orderDetailsService from '../../services/orderDetails.js'
import { Context } from '../../Context.js'
import './styles.styl'
import dishService from '../../services/dish.js'

/* i18n */
import { useTranslation } from 'react-i18next';

const Kitchen = () => {
  const { t } = useTranslation(['Kitchen'])

  const [details, setDetails] = useState([]);
  const { changeDishStatus, dishForChangeStatus, updateDishForUpdateStatus, updateChangeDishStatus } = useContext(Context);

  useEffect(() => {
    orderDetailsService.getAll()
      .then(data => prepareCards(data))
  }, [changeDishStatus]);

  const prepareCards = (data) => {
    let currentOrderId = null;
    let currentOrder = [];
    let currentCicle = null;
    const orders = [];

    const resetAux = (newCurrentOrderId, newCurrentCicle) => {
      currentOrderId = newCurrentOrderId;
      currentCicle = newCurrentCicle;
    }

    const createCard = (title, status, orderId, cicle, id, tableId, imageUrl) => {
      currentOrder.push({
        title,
        quantity: 1,
        status,
        orderId,
        cicle,
        id,
        tableId,
        imageUrl
      })
    }

    data.forEach((el, index)=> {
      //first iteration set the working values.
      if (currentOrderId == null) {
        resetAux(el.order.id, el.cycleInKitchen)
      }
      //if order is different close the current order and open a new.
      if (currentOrderId !== el.order.id) {
        //change the current order
        resetAux(el.order.id, el.cycleInKitchen)
        //push a new order in main array
        orders.push(currentOrder);
        //reset current order
        currentOrder = [];
        createCard(el.dish.name, el.status, el.order.id, el.cycleInKitchen, el.id, el.order.tableId, el.dish.imageUrl)

      } else {
        //if is the sema order, check if is other cicle
        if (currentCicle !== el.cycleInKitchen) {
          //if is other cicle close the current order and push in the main orders array
          resetAux(el.order.id, el.cycleInKitchen)
          orders.push(currentOrder);
          currentOrder = [];
        }
        createCard(el.dish.name, el.status, el.order.id, el.cycleInKitchen, el.id, el.order.tableId, el.dish.imageUrl)
        //if it last order we eed to close it
        if (index === data.length - 1) {
          resetAux(null, null)
          orders.push(currentOrder);
          currentOrder = [];
        }
      }
    });

    setDetails(orders);
  }

  const handleQuestion = (item) => {
    return item.status === 'ready-to-prepare' ? `${t('Kitchen:Prepare', 'Prepare')} ${item.title} ${t('Kitchen:now', 'now?')}` : `${t('Kitchen:Send', 'Send')} ${item.title} ${t('Kitchen:Client', 'to client?')}`
  }

  const handleConfirm = (option, item = null) => {
    if (option === 'cancel') {
      updateDishForUpdateStatus(null)
    }

    if (option === 'confirm') {
      const { status } = item;

      switch (status) {
        case 'ready-to-prepare':
          dishService.preparing({ dishId: item.id })
            .then(()=> {
              updateChangeDishStatus()
              updateDishForUpdateStatus(null)
            })
          break;
        case 'preparing':
          dishService.readyToServe({ dishId: item.id })
            .then(()=> {
              updateChangeDishStatus()
              updateDishForUpdateStatus(null)
            })
          break;
        default:
          break;
      }
    }
  }

  return details.length > 0 ? (
    <section className="kitchen">
      {/*
      Commented for future implementation
      {
        orderSelected != null && <div className="kitchen__modals">
          <KitchenModal tableNum={orderSelected[0].tableId} items={orderSelected} stat="redStat" key={orderSelected[0].detailId} info=":)" />
          </div>
      } */}
      <main className="kitchen__orders">
        <ResponsiveMasonry columnsCountBreakPoints={{ 750: 4 }}>
          <Masonry gutter="20px">
            { details.map((el)=> (
              <KitchenOrderCard
                tableNum={el[0].tableId}
                items={el}
                stat="redStat"
                key={el[0].id}
              />))
            }
          </Masonry>
        </ResponsiveMasonry>
      </main>
      {
        dishForChangeStatus != null && <div className="confirm-change">
          <div className="confirm-change__content">
            <h3 className="confirm-change__content-message">{ handleQuestion(dishForChangeStatus) }</h3>
            <figure className="confirm-change__content-image">
              <img src={dishForChangeStatus.imageUrl} alt="Dish"/>
            </figure>
            <div className="confirm-change__content-buttons">
              <button className="button button--confirm" onClick={() => handleConfirm('confirm', dishForChangeStatus)}>{t('Kitchen:Confirm', 'Confirm')}</button>
              <button className="button button--cancel" onClick={() => handleConfirm('cancel')}>{t('Kitchen:Cancel', 'Cancel')}</button>
            </div>
          </div>
        </div>
      }
    </section>
  ) :
    <h3 className="empty-message">
      {t('Kitchen:Orders', 'Without order to attend')}
      <figure>
        <img src={waiter} alt="Waiter"/>
      </figure>
    </h3>
}

export default Kitchen
