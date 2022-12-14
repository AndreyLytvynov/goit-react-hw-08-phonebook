import EditContactForm from 'components/EditContactForm/EditContactForm';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { StyledModal, StyledOverlay } from './ModalEdit.styled';

const Modal = ({ openModal, id }) => {
  useEffect(() => {
    const clickEsc = e => {
      if (e.code !== 'Escape') return;
      openModal();
    };

    window.addEventListener('keydown', clickEsc);

    return () => {
      window.removeEventListener('keydown', clickEsc);
    };
  }, [openModal]);

  const clickOverlay = e => {
    if (e.target.tagName !== 'DIV') return;
    openModal();
  };

  return (
    <StyledOverlay onClick={clickOverlay}>
      <StyledModal>
        <EditContactForm id={id} />
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
