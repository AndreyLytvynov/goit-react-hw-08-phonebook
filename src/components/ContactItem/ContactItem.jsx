import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { RiDeleteBin6Fill } from 'react-icons/ri';

import { deleteContacts } from 'redux/contactsSlice/operation';
import { TitleStyled, FieldStyled } from './ContactItem.styled';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.contacts.isLoading);

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
    toast('The contact was successfully deleted', {
      type: 'success',
      autoClose: 1000,
    });
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
      <button
        disabled={isLoading}
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        <RiDeleteBin6Fill />
      </button>
    </li>
  );
};

export default ContactItem;
