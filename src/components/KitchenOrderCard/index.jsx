import React from 'react'
import './styles.styl'

const KitchenOrderCard = ({ tableNum, items }) => {
  return (
    <div className="orderCard">
      <div className="orderCard__table">
        <h1>Table {tableNum}</h1>
      </div>
      <div className="orderCard__list">
        {items.map((item, i) => (
          <div className="orderCard__list--item" key={i}>
            <h3>{item.quantity}</h3>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KitchenOrderCard
