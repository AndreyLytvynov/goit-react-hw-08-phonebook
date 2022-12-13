import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem/ContactItem';

import { Contacts } from './ContactList.styled';

const ContactList = ({ filterContacts }) => {
  return (
    <div>
      <Contacts>
        {filterContacts.map(({ name, number, id }) => {
          return (
            <ContactItem key={nanoid()} name={name} number={number} id={id} />
          );
        })}
      </Contacts>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
