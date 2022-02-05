import React from 'react'
import './Modal.css'

const Modal = ({ message, exitModal }) => {
  return(
    <section className='modal'>
      <article className='modal-box'>
        <h3>{message}</h3>
        <button onClick={exitModal}>OK</button>
      </article>  
    </section>
  )
}

export default Modal