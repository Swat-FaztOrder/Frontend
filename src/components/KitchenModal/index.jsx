import React from 'react'

import './styles.styl'

const KitchenModal = ({ tableNum, stat, items, info }) => {
  return (
    <section className="kitchenModal">
      <div className={`kitchenModal__table ${stat}`}>
        <h1>Table {tableNum}</h1>
      </div>
      <div className="kitchenModalContent">
        <div className="kitchenModalContent__left">
          {items.map((item, i) => (
            <div className="kitchenModalContent__left--item" key={i}>
              <h3 className="kitchenModalContent__left--itemQuantity">{item.quantity}</h3>
              <h3 className="kitchenModaContentl__left--itemTitle">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="kitchenModalContent__right">
          <div className="kitchenModalContent__right--title">
            <i className="fas fa-sticky-note" />
            <h2>Extra info...</h2>
          </div>
          <p className="kitchenModalContent__right--text">
            {info}
          </p>
        </div>
      </div>
    </section>
  )
}

export default KitchenModal
