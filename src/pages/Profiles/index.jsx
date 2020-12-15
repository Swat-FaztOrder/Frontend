import React, { useContext, useEffect, useState } from 'react';
import PeopleGrid from '../../components/PeopleGrid/index.jsx';
import Modal from '../../components/Modal/index.jsx'
import Waiter from '../../assets/waiter.png'
import { Context } from '../../Context.js';
import './styles.styl'

const Menu = () => {
  const { modalDisplay } = useContext(Context)
  const [modal, setModal] = useState(modalDisplay)

  useEffect(()=> {
    setModal(modalDisplay)
  }, [modalDisplay])

  return (
    <>
      <PeopleGrid />
      {
        modal === 'ADD_USER' &&
        <Modal
          title="Added User!!!"
          image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          subtitleA="Diego Valdez"
          subtitleB="Cheff"
          last="Your added user will be available to login right now"
          buttons="false"
          hideModal={() => setModal('')}
          hideButton="Ok"
        />
      }
      {
        modal === 'UPDATE_USER' &&
        <Modal
          title="Updated User!!!"
          image="https://images.pexels.com/photos/4871397/pexels-photo-4871397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          subtitleA="Diego Valdez"
          subtitleB="Cheff"
          last="Your added user will be available to login right now"
          buttons="false"
          hideModal={() => setModal('')}
          hideButton="Ok"
        />
      }
      {
        modal === 'DELETE_USER' &&
        <Modal
          title="Deleted User!!!"
          image={Waiter}
          last="Your added user will be available to login right now"
          buttons="false"
          hideModal={() => setModal('')}
          hideButton="Ok"
        />
      }
    </>
  )
}

export default Menu;
