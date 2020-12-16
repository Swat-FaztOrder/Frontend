import React, { useContext, useEffect, useState } from 'react';
import MenuGrid from '../../components/MenuGrid/index.jsx';
import Modal from '../../components/Modal/index.jsx'
import Waiter from '../../assets/waiter.png'
import { Context } from '../../Context.js';
import './styles.styl'

// The commented components in Menu's return are the calls of different modals for menu
// You can uncomment to see how they are
const Menu = () => {
  const { modalDisplay, updateAction, updateModalDisplay } = useContext(Context)
  const [modal, setModal] = useState(modalDisplay)

  useEffect(()=> {
    setModal(modalDisplay)
  }, [modalDisplay])

  const handleOrderFinishAction = () => {
    updateModalDisplay('')
    window.location.replace('#/tables');
  }

  const handleDishCreatedUpdated = () => {
    updateAction('BASE')
    updateModalDisplay('')
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
          hideModal={() => updateModalDisplay('')}
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
          hideModal={() => updateModalDisplay('') }
        />
      }
      {
        modal === 'ADD_DISH' &&
        <Modal
          title="New dish registered"
          image={Waiter}
          last="You have created a new dish successfully"
          buttons="false"
          hideModal={() => handleDishCreatedUpdated() }
        />
      }
      {
        modal === 'UPDATED_DISH' &&
        <Modal
          title="Dish Updated!"
          image={Waiter}
          last="You have updated a dish successfully"
          buttons="false"
          hideModal={() => handleDishCreatedUpdated() }
        />
      }

      {
        modal === 'CATEGORY_CREATED' &&
        <Modal
          title="Category created!"
          image={Waiter}
          last="You have created a category successfully"
          buttons="false"
          hideModal={() => updateModalDisplay('') }
        />
      }
      {
        modal === 'CATEGORY_UPDATED' &&
        <Modal
          title="Category updated!"
          image={Waiter}
          last="You have updated a category successfully"
          buttons="false"
          hideModal={() => updateModalDisplay('') }
        />
      }
    </>
  )
}

export default Menu;
