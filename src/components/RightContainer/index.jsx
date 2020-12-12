import React, { useContext } from 'react'

import waiter from '../../assets/waiter.png'

/* Context */
import { Context } from '../../Context'
import OrderDetails from '../OrderDetails/index.jsx'
import PeopleDetails from '../PeopleDetails/index.jsx'
import Basket from '../Basket/index.jsx'
import FormRight from '../FormRight/index.jsx'
import AddItem from '../AddItem/index.jsx'

import './styles.styl'

const RightContainer = () => {
  const { actionLayout, setActionLayout, ActionTypes, user } = useContext(Context)

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
        <PeopleDetails/> :
        ''}
      {actionLayout === ActionTypes.DISH_ADD || actionLayout === ActionTypes.DISH_UPDATE ?
        <AddItem /> :
        ''}
      {actionLayout === ActionTypes.BASKET &&
        <Basket title="Title" details="details" price="56" />}

      {actionLayout === ActionTypes.CATEGORY_ADD || actionLayout === ActionTypes.CATEGORY_UPDATE ?
        <FormRight buttonMessage="Send" title="Enter the name of the new categorie" /> :
        ''}
    </div>
  )
}

export default RightContainer
