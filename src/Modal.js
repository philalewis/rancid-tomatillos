import React from 'react'
import './Modal.css'

const Modal = ({ message, exitModal }) => {
  return(
    <section className='modal'>
      <article className='modal-box'>
        <h3>Uh Oh! <br/>{message}</h3>
        <button className='modal-btn' onClick={exitModal} >OK</button>
      </article>  
    </section>
  )
}

export default Modal