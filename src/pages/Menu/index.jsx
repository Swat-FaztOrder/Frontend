import React, { useContext, useEffect, useState } from 'react';
import MenuGrid from '../../components/MenuGrid/index.jsx';
import Modal from '../../components/Modal/index.jsx'
import Waiter from '../../assets/waiter.png'
import { Context } from '../../Context.js';
import './styles.styl'

// The commented components in Menu's return are the calls of different modals for menu
// You can uncomment to see how they are
const Menu = () => {
  const { modalDisplay } = useContext(Context)
  const [modal, setModal] = useState(modalDisplay)

  useEffect(()=> {
    setModal(modalDisplay)
  }, [modalDisplay])

  const handleOrderFinishAction = () => {
    setModal('')
    window.location.replace('#/tables');
  }

  return (
    <>
      <MenuGrid />
      {
        modal === 'ORDER_FINISHED' &&
        <Modal
          title="Order finished"
          image={Waiter}
          subtitleA="Total"
          subtitleB="$155.99"
          last="It was an honor to serve you"
          buttons="true"
          buttonA="Invoice"
          buttonB="Continue"
          handleClickB={() => handleOrderFinishAction()}
        />
      }
      {
        modal === 'ADDED_TO_ORDER' &&
        <Modal
          title="Added to order"
          image={Waiter}
          subtitleA="Lorem Ipsum"
          subtitleB="$5.99"
          last="What a great choice"
          buttons="false"
          hideModal={() => setModal('')}
          hideButton="Ok"
        />
      }
      {
        modal === 'ORDER_ON_ITS_WAY' &&
        <Modal
          title="Order on it's way!"
          image={Waiter}
          subtitleA="your food is about to be prepared"
          subtitleB=""
          last="Be ready for the deliciousness"
          buttons="false"
          hideModal={() => setModal('')}
          hideButton="Ok"
        />
      }
    </>
  )
}

export default Menu;
