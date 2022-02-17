import React from 'react';
import './Modal.css';
import { Link } from 'react-router-dom';

const Modal = ({ message, exitModal }) => {
  return(
    <section className='modal'>
      <article className='modal-box'>
        <h3>Uh Oh! <br/>{message}</h3>
        <Link to='/rancid-tomatillos/'> 
          <button className='modal-btn' onClick={exitModal} >OK</button>
        </Link>  
      </article>  
    </section>
  )
};

export default Modal;