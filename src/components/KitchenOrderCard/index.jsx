import React, { useContext } from 'react'
import { Context } from '../../Context'
import dishService from '../../services/dish';
import './styles.styl'

const KitchenOrderCard = ({ tableNum, items, stat }) => {
  const { updateChangeDishStatus } = useContext(Context);
  const states = {
    'ready-to-prepare': 'en espera',
    'preparing': 'preparando',
  }

  const handleChange = (e, item) => {
    const {status} = item;

    switch (status) {
      case 'ready-to-prepare':
        if(confirm(`¿Preparar ${item.title} ahora?`)) {
          dishService.preparing({ dishId: item.id})
          .then(()=> updateChangeDishStatus())
        }
      break;
      case 'preparing':
        if(confirm(`¿Enviar ${item.title} al cliente ahora?`)) {
          dishService.readyToServe({ dishId: item.id})
          .then(()=> updateChangeDishStatus())
        }
      break;
      default:
        break;
    }
    e.target.checked = false;
  }

  const handleTitle = (item) => {
   return item.status == 'preparing' ? <strike>{item.title}-{item.id}</strike> : item.title+'-'+item.id
  }

  const handleStatus = (item) => {
   return item.status == 'preparing' ? 'https://www.flaticon.com/svg/static/icons/svg/3753/3753091.svg' : 'https://www.flaticon.com/svg/static/icons/svg/3445/3445534.svg';
  }

  return (
    <div className="orderCard">
      <div className={`orderCard__table ${stat}`}>
        <h1>Table {tableNum} {`#${items[0].orderId}`}</h1>
      </div>
      <div className="orderCard__list">
        {items.map((item) => (
          <div className="orderCard__list--item" key={item.id}>
            <h3 className="orderCard__list--itemQuantity">
              <input type="checkbox" onClick={ (e) => handleChange(e, item)}/>
            </h3>
            <h3 className="orderCard__list--itemTitle">
              { handleTitle(item) }
            </h3>
            <small className="orderCard__list--itemStatus">
                <img src={ handleStatus(item) } alt="" width="20" height="20"/>
            </small>
          </div>
        ))}
      </div>
      <a className="orderCard__icon">
        <i className="fas fa-sticky-note" />
      </a>
    </div>
  )
}

export default KitchenOrderCard
