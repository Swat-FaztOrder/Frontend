import React from 'react';
import ItemDetails from '../../components/ItemDetails/index.jsx';
import PeopleGrid from '../../components/PeopleGrid/index.jsx';
import Header from '../../components/Header/index.jsx'
import MenuCategories from '../../components/MenuCategories/index.jsx'
import PeopleDetails from '../../components/PeopleDetails/index.jsx';

import './styles.styl'

const Menu = () => {
  return (
    <div className="profile">
      <Header />
      <main className="profile__container">
        <section className="profile__container--left">
          <MenuCategories />
        </section>
        <section className="profile__container--center">
          <PeopleGrid />
        </section>
        <section className="profile__container--right">
          <PeopleDetails />
        </section>
      </main>
    </div>
  )
}

export default Menu;
