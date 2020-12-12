import React from 'react'
import './styles.styl'

const Modal = ({ title, image, subtitleA, subtitleB, last, buttons, buttonA, buttonB, handleClickB, hideModal, hideButton }) => {
  return (
    <section className="modalContainer">
      <main className="modalContainer__modal">
        <div className="modalContainer__modal--title">
          <h1>{title}</h1>
        </div>
        <div className="modalContainer__modal--image">
          <img src={image} alt="" />
        </div>
        <div className="modalContainer__modal--subtitle">
          <h3>{subtitleA}</h3>
          <h3>{subtitleB}</h3>
        </div>
        <div className="modalContainer__modal--lastMessage">
          <h2>{last}</h2>
        </div>
        {buttons === 'true' &&
          <div className="modalContainer__modal--buttons">
            <button className="modalContainer__modal--buttons-1">
              {buttonA}
            </button>
            <button className="modalContainer__modal--buttons-2" onClick={()=>handleClickB()}>
              {buttonB}
            </button>
          </div>
        }
        {
          //only for hide modal
          buttons == 'false' &&
          <div className="modalContainer__modal--buttons">
            <button className="modalContainer__modal--buttons-2" onClick={()=>hideModal()}>
              {hideButton}
            </button>
          </div>
        }
      </main>
    </section>
  )
}

export default Modal
