import React from 'react'

import './styles.styl'

const MenuCategories = () => {
  return (
    <div className="menuCategories">
      <div className="menuCategories__popular">
        <i className="fas fa-star" />
        <h1>Popular</h1>
      </div>
      <div className="menuCategories__fast">
        <i className="fas fa-hamburger" />
        <h1>Fast Food</h1>
      </div>
      <div className="menuCategories__dessert">
        <i className="fas fa-ice-cream" />
        <h1>Dessert</h1>
      </div>
      <div className="menuCategories__beverages">
        <i className="fas fa-glass-martini" />
        <h1>Beverages</h1>
      </div>
      <div className="menuCategories__starter">
        <i className="fas fa-bread-slice" />
        <h1>Starter</h1>
      </div>
      <div className="menuCategories__extras">
        <i className="fas fa-cookie-bite" />
        <h1>Extras</h1>
      </div>
    </div>
  )
}

export default MenuCategories;
