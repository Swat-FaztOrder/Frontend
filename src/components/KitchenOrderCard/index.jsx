import React from 'react'
import './styles.styl'

const KitchenOrderCard = ({ tableNum, items }) => {
  return (
    <div className="orderCard">
      <div className="orderCard__table redStat">
        <h1>Table {tableNum}</h1>
      </div>
      <div className="orderCard__list">
        {items.map((item, i) => (
          <div className="orderCard__list--item" key={i}>
            <h3 className="orderCard__list--itemQuantity">{item.quantity}</h3>
            <h3 className="orderCard__list--itemTitle">{item.title}</h3>
          </div>
        ))}
      </div>
      <a href="" className="orderCard__icon">
        <i className="fas fa-sticky-note" />
      </a>
    </div>
  )
}

export default KitchenOrderCard
