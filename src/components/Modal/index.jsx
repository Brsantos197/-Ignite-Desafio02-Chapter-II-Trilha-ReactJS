import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

// import { Container } from './styles';

function Modal(props) {
  const { isOpen, setIsOpen, children } = props;

  const [modalStatus, setModalStatus] = useState(isOpen)
  useEffect(() => {
    if (modalStatus !== isOpen) {
      console.log(props)
      setModalStatus(isOpen)
    }
  }, [modalStatus, isOpen, props])

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '736px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;