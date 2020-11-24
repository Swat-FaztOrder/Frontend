import React from 'react';
import ItemDetails from '../../components/ItemDetails/index.jsx';
import MenuGrid from '../../components/MenuGrid/index.jsx';
import Header from '../../components/Header/index.jsx'
import MenuCategories from '../../components/MenuCategories/index.jsx'
import OrderDetails from '../../components/OrderDetails/index.jsx';

import './styles.styl'

const Menu = () => {
  return (
    <div className="menu">
      <Header />
      <main className="menu__container">
        <section className="menu__container--left">
          <MenuCategories/>
        </section>
        <section className="menu__container--center">
          <MenuGrid />
        </section>
        <section className="menu__container--right">
          <OrderDetails/>
        </section>
        <ItemDetails details="Lorem Ipsum" price="5.99" title="Lorem Ipsum" subtitle="Lorem Ipsum"/>
      </main>
    </div>
  )
}

export default Menu;
