import React from 'react'
import Win from './Win'
import Restart from './Restart'
import { useContext } from "react";
import { ModalContext } from '../context/ModalContext';

const Modal = () => {
    const {show, modalMode} = useContext(ModalContext)
  return (
    <>
    {show && (
          <div className='modal'>
          <div className="modal__content">
              <div className="container">
                  {modalMode === 'winner' && <Win/>}
                  {modalMode === 'start' && <Restart/>}
              </div>
          </div>
      </div>  
    )}
  
    </>
  );
};

export default Modal;