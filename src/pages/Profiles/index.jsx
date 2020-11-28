import React from 'react';
import PeopleGrid from '../../components/PeopleGrid/index.jsx';
import Header from '../../components/Header/index.jsx'
import MenuCategories from '../../components/MenuCategories/index.jsx'
import PeopleDetails from '../../components/PeopleDetails/index.jsx';
import AdminDetails from '../../components/AdminDetails/index.jsx';

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
          <AdminDetails />
          <PeopleDetails />
        </section>
      </main>
    </div>
  )
}

export default Menu;
