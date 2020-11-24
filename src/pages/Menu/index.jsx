import React from 'react';
import ItemDetails from '../../components/ItemDetails/index.jsx';
import MenuGrid from '../../components/MenuGrid/index.jsx';
import Header from '../../components/Header/index.jsx'
import MenuCategories from '../../components/MenuCategories/index.jsx'
import waiter from '../../assets/waiter.png'
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
          <img src={waiter} alt="" />
          <div className="menu__container--rightWaiter">
            <span>Waiter</span>
            <h2>Diego Valdez Acosta</h2>
          </div>
          <div className="menu__container--rightTable">
            <span>Table</span>
            <h2>8</h2>
          </div>
          <button>Finish order</button>
        </section>
        <ItemDetails />
      </main>
    </div>
  )
}

export default Menu;
