import React from 'react';

/* Components */
import PeopleGrid from '../../components/PeopleGrid/index.jsx';
import Modal from '../../components/Modal/index.jsx'
import Waiter from '../../assets/waiter.png'

/* Styles */
import './styles.styl'

const Menu = () => {
  return (
    <>
      <PeopleGrid />
      {<Modal title="Added User!!!" image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" subtitleA="Diego Valdez" subtitleB="Cheff" last="Your added user will be available to login right now" buttons="false"/>}
      {<Modal title="Updated User!!!" image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" subtitleA="Diego Valdez" subtitleB="Cheff" last="Your updated user will be available to login right now" buttons="false"/>}
      {<Modal title="Deleted User!!!" image={Waiter} last="The user has been deleted" buttons="false"/>}
    </>
  )
}

export default Menu;
