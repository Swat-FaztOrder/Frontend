import React, { useContext, useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import KitchenOrderCard from '../../components/KitchenOrderCard/index.jsx'
import KitchenModal from '../../components/KitchenModal/index.jsx'
import orderDetailsService from '../../services/orderDetails.js'
import { Context } from '../../Context.js'
import './styles.styl'

const Kitchen = () => {

  const [details, setDetails] = useState([]);
  const { changeDishStatus } = useContext(Context);

  useEffect(() => {
    orderDetailsService.getAll()
    .then(data => prepareCards(data))
  }, [changeDishStatus]);

  const prepareCards = (data) => {
      let currentOrderId = null;
      let currentOrder = [];
      let currentCicle = null;
      let orders = [];

      const resetAux = (newCurrentOrderId, newCurrentCicle) => {
        currentOrderId = newCurrentOrderId;
        currentCicle = newCurrentCicle;
      }

      const createCard = (title, status, orderId, cicle, id, tableId) => {
        currentOrder.push({
          title,
          quantity: 1,
          status,
          orderId,
          cicle,
          id,
          tableId
        })
      }

      data.forEach((el, index)=> {
        //first iteration set the working values.
        if (currentOrderId == null) {
          resetAux(el.order.id, el.cycleInKitchen)
        }
        //if order is different close the current order and open a new.
        if (currentOrderId != el.order.id) {
          //change the current order
          resetAux(el.order.id, el.cycleInKitchen)
          //push a new order in main array
          orders.push(currentOrder);
          //reset current order
          currentOrder = [];
          createCard(el.dish.name, el.status, el.order.id, el.cycleInKitchen, el.id, el.order.tableId)

        } else {
          //if is the sema order, check if is other cicle
          if(currentCicle != el.cycleInKitchen) {
            //if is other cicle close the current order and push in the main orders array
            resetAux(el.order.id, el.cycleInKitchen)
            orders.push(currentOrder);
            currentOrder = [];
          }
            createCard(el.dish.name, el.status, el.order.id, el.cycleInKitchen, el.id, el.order.tableId)
            //if it last order we eed to close it
            if (index == data.length -1 ) {
              resetAux(null, null)
              orders.push(currentOrder);
              currentOrder = [];
            }
        }
      });


      setDetails(orders);
  }

  return details.length > 0 && (
    <section className="kitchen">
      {/*
      Commented for future implementation
      {
        orderSelected != null && <div className="kitchen__modals">
          <KitchenModal tableNum={orderSelected[0].tableId} items={orderSelected} stat="redStat" key={orderSelected[0].detailId} info=":)" />
          </div>
      } */}
      <main className="kitchen__orders">
        <ResponsiveMasonry columnsCountBreakPoints={{750: 4}}>
          <Masonry gutter="20px">
            { details.map((el)=> <KitchenOrderCard tableNum={el[0].tableId} items={el}
              stat="redStat" key={el[0].id} />) }
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </section>
  )
}

export default Kitchen
