import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Header from '../../components/Header/index.jsx'
import KitchenOrderCard from '../../components/KitchenOrderCard/index.jsx'
import KitchenModal from '../../components/KitchenModal/index.jsx'

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
    { title: 'Beverage', quantity: 2 }
  ]

  return (
    <section className="kitchen">
      <div className="kitchen__modals">
        <KitchenModal tableNum="5" items={itemList2} stat="greenStat" />
      </div>
      <Header />
      <main className="kitchen__orders">
        <ResponsiveMasonry columnsCountBreakPoints={{ 1000: 4, 1400: 5 }}>
          <Masonry gutter="20px">
            <KitchenOrderCard tableNum="1" items={itemList1} stat="redStat" />
            <KitchenOrderCard tableNum="2" items={itemList2} stat="redStat" />
            <KitchenOrderCard tableNum="3" items={itemList3} stat="greenStat" />
            <KitchenOrderCard tableNum="4" items={itemList1} stat="redStat" />
            <KitchenOrderCard tableNum="5" items={itemList2} stat="greenStat" />
            <KitchenOrderCard tableNum="6" items={itemList3} stat="redStat" />
            <KitchenOrderCard tableNum="7" items={itemList1} stat="yellowStat" />
            <KitchenOrderCard tableNum="8" items={itemList1} stat="greenStat" />
            <KitchenOrderCard tableNum="9" items={itemList2} stat="greenStat" />
            <KitchenOrderCard tableNum="10" items={itemList3} stat="redStat" />
            <KitchenOrderCard tableNum="11" items={itemList1} stat="greenStat" />
            <KitchenOrderCard tableNum="12" items={itemList2} stat="yellowStat" />
            <KitchenOrderCard tableNum="13" items={itemList3} stat="greenStat" />
            <KitchenOrderCard tableNum="14" items={itemList1} stat="redStat" />
            <KitchenOrderCard tableNum="15" items={itemList1} stat="redStat" />
            <KitchenOrderCard tableNum="16" items={itemList2} stat="yellowStat" />
            <KitchenOrderCard tableNum="17" items={itemList3} stat="redStat" />
            <KitchenOrderCard tableNum="18" items={itemList1} stat="yellowStat" />
            <KitchenOrderCard tableNum="19" items={itemList2} stat="redStat" />
            <KitchenOrderCard tableNum="20" items={itemList3} stat="redStat" />
          </Masonry>
        </ResponsiveMasonry>
      </main>
    </section>
  )
}

export default Kitchen
