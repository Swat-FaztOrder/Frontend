import React from 'react';
import ItemDetails from '../../components/ItemDetails/index.jsx';
import MenuGrid from '../../components/MenuGrid/index.jsx';
import Header from '../../components/Header/index.jsx'
import waiter from '../../assets/waiter.png'
import './styles.styl'

const Menu = () => {
  return (
    <div className="menu">
      <Header />
      <main className="menu__container">
        <section className="menu__container--left">
          <div className="menu__container--leftPopular">
            <i className="fas fa-star" />
            <h1>Popular</h1>
          </div>
          <div className="menu__container--leftFast">
            <i className="fas fa-hamburger" />
            <h1>Fast Food</h1>
          </div>
          <div className="menu__container--leftDessert">
            <i className="fas fa-ice-cream" />
            <h1>Dessert</h1>
          </div>
          <div className="menu__container--leftBeverages">
            <i className="fas fa-glass-martini" />
            <h1>Beverages</h1>
          </div>
          <div className="menu__container--leftStarter">
            <i className="fas fa-bread-slice" />
            <h1>Starter</h1>
          </div>
          <div className="menu__container--leftExtras">
            <i className="fas fa-cookie-bite" />
            <h1>Extras</h1>
          </div>
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
