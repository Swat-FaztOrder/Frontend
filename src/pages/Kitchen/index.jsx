import React from 'react'
import Header from '../../components/Header/index.jsx'
import KitchenOrderCard from '../../components/KitchenOrderCard/index.jsx'

import './styles.styl'

const Kitchen = () => {
  const itemList = [
    { title: 'Hamburguer', quantity: 1 },
    { title: 'Pizza', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Subway', quantity: 1 }
  ]

  return (
    <div className="kitchen">
      <Header />
      <main className="orders">
        <KitchenOrderCard tableNum="1" items={itemList} />
      </main>
    </div>
  )
}

export default Kitchen
