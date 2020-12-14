import React, { useContext } from 'react'
import { Context } from '../../Context'
import dishService from '../../services/dish';
import './styles.styl'

const KitchenOrderCard = ({ tableNum, items, stat }) => {
  const { updateChangeDishStatus } = useContext(Context);

  const handleChange = (item) => {
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
  }

  const handleTitle = (item) => {
    return item.status == 'preparing' ? <strike className='text-muted'>{item.title}</strike> : item.title
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
          <div className="orderCard__list--item" key={item.id} onClick={ () => handleChange(item) }>
            <h3 className="orderCard__list--itemTitle">
              { handleTitle(item) }
            </h3>
            <figure className="orderCard__list--itemStatus">
                <img src={ handleStatus(item) } alt="" width="20" height="20"/>
            </figure>
          </div>
        ))}
      </div>
      {/* Commented to future implementation */}
      {/* <a className="orderCard__icon">
        <i className="fas fa-sticky-note" />
      </a> */}
    </div>
  )
}

export default KitchenOrderCard
