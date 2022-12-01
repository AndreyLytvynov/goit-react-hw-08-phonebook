import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './ContactForm.styled';
import { useState } from 'react';

const ContactForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name: nameEvent, value } = e.target;

    switch (nameEvent) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Not this field');
    }
  };

  const formSubmitHandle = e => {
    e.preventDefault();
    const add = addContacts({ name, number });
    if (!add) {
      resetForm();
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={formSubmitHandle}>
      <label>
        <span>Name</span>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <span>Number</span>
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </Form>
  );
};

export default ContactForm;

ContactForm.ropTypes = {
  addContacts: PropTypes.func.isRequired,
};
