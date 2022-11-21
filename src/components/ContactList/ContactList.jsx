import React from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './ContactList.styled';

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <Contacts>
      {filterContacts.map(({ name, number, id }) => {
        return (
          <li key={nanoid()}>
            <span>
              {name}: {number}
            </span>
            <button
              type="button"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </Contacts>
  );
};

export default ContactList;
