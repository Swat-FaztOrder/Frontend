import React from 'react'
import Header from '../../components/Header/index.jsx'
import KitchenOrderCard from '../../components/KitchenOrderCard/index.jsx'

import './styles.styl'

const Kitchen = () => {
  const itemList1 = [
    { title: 'Hamburguer', quantity: 1 },
    { title: 'Pizza', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Subway', quantity: 1 }
  ]
  const itemList2 = [
    { title: 'Hamburguer', quantity: 1 },
    { title: 'Pizza', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Subway', quantity: 1 }
  ]
  const itemList3 = [
    { title: 'Hamburguer', quantity: 1 },
    { title: 'Pizza', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Subway', quantity: 1 },
    { title: 'Hamburguer', quantity: 1 },
    { title: 'Pizza', quantity: 1 },
    { title: 'Beverage', quantity: 2 },
    { title: 'Hotdog', quantity: 1 },
    { title: 'Subway', quantity: 1 },
    { title: 'Hamburguer', quantity: 1 },
    { title: 'Pizza', quantity: 1 },
    { title: 'Beverage', quantity: 2 }
  ]

  return (
    <div className="kitchen">
      <Header />
      <main className="orders">
        <KitchenOrderCard tableNum="1" items={itemList1} />
        <KitchenOrderCard tableNum="2" items={itemList2} />
        <KitchenOrderCard tableNum="3" items={itemList3} />
        <KitchenOrderCard tableNum="4" items={itemList1} />
        {/* <KitchenOrderCard tableNum="5" items={itemList2} />
        <KitchenOrderCard tableNum="5" items={itemList3} />
        <KitchenOrderCard tableNum="6" items={itemList1} />
        <KitchenOrderCard tableNum="7" items={itemList2} /> */}
      </main>
    </div>
  )
}

export default Kitchen
