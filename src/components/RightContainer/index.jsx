import React, { useContext } from 'react'

import waiter from '../../assets/waiter.png'

/* Context */
import { Context } from '../../Context'
import OrderDetails from '../OrderDetails/index.jsx'
import PeopleDetails from '../PeopleDetails/index.jsx'
import ItemDetails from '../ItemDetails/index.jsx'

import './styles.styl'

const RightContainer = () => {
  const { actionLayout, setActionLayout, ActionTypes } = useContext(Context)

  return (
    <div className="rightContainer">
      {actionLayout === ActionTypes.BASE &&
        <OrderDetails
          image={waiter}
          Button="false"
          subtitle1="Admin"
          title1="Diego Valdez"
          subtitle2="Restaurant"
          title2="Platzi Master"
        />
      }
      {actionLayout === ActionTypes.PROFILE_ADD || actionLayout === ActionTypes.PROFILE_UPDATE ?
        <PeopleDetails
          image={waiter}
          Button="false"
          subtitle1="Admin"
          title1="Diego Valdez"
          subtitle2="Restaurant"
          title2="Platzi Master"
        /> :
        ''}
      {actionLayout === ActionTypes.DISH_ADD || actionLayout === ActionTypes.DISH_UPDATE ?
        <ItemDetails title="Title" details="details" price="56" /> :
        ''}
    </div>
  )
}

export default RightContainer
