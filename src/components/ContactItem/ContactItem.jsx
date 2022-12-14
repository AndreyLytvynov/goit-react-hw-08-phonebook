import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { RiDeleteBin6Fill, RiEdit2Fill } from 'react-icons/ri';

import { deleteContacts } from 'redux/contactsSlice/operation';
import { TitleStyled, FieldStyled } from './ContactItem.styled';
import Modal from 'components/ModalEdit/ModalEdit';
import { Box } from 'components/Box';

const ContactItem = ({ name, number, id }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.contacts.isLoading);

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
    toast('The contact was successfully deleted', {
      type: 'success',
      autoClose: 1000,
    });
  };

  const openModal = () => {
    setModalVisible(prevState => !prevState);
  };

  return (
    <li>
      <div>
        <FieldStyled>
          <TitleStyled>Name:</TitleStyled>
          <span>{name}</span>
        </FieldStyled>
        <p>
          <TitleStyled>Phone:</TitleStyled>
          <span>{number}</span>
        </p>
      </div>
      <Box display="flex">
        <button disabled={isLoading} type="button" onClick={openModal}>
          <RiEdit2Fill />
        </button>
        <button
          disabled={isLoading}
          type="button"
          onClick={() => {
            deleteContact(id);
          }}
        >
          <RiDeleteBin6Fill />
        </button>
      </Box>
      {modalVisible && <Modal openModal={openModal} id={id} />}
    </li>
  );
};

export default ContactItem;
