import { number } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContacts } from 'redux/contactsSlice/operation';

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
      <span>
        {name}: {number}
      </span>
      <button
        disabled={isLoading}
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
