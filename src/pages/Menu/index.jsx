import React from 'react';

/* Components */
import MenuGrid from '../../components/MenuGrid/index.jsx'
import Modal from '../../components/Modal/index.jsx'
import Waiter from '../../assets/waiter.png'

/* Styles */
import './styles.styl'

// The commented components in Menu's return are the calls of different modals for menu
// You can uncomment to see how they are
const Menu = () => {
  return (
    <>
      <MenuGrid />
      {/* <Modal title="Order finished" image={Waiter} subtitleA="Total" subtitleB="$155.99" last="It was an honor to serve you" buttons="true" buttonA="Invoice" buttonB="Continue"/> */}
      {/* <Modal title="Added to order" image={Waiter} subtitleA="Lorem Ipsum" subtitleB="$5.99" last="What a great choice" buttons="false"/> */}
      {/* <Modal title="Order on it's way!" image={Waiter} subtitleA="Your food is about to be prepared" last="Be ready for the deliciousness" buttons="false"/> */}
    </>
  )
}

export default Menu;
