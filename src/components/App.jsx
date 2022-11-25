import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Box } from './Box';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    if (!this.getLocalData('contacts')) return;
    const localStorContacts = this.getLocalData('contacts');
    this.setState({
      contacts: localStorContacts,
    });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  getLocalData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  addContacts = ({ name, number }) => {
    const checkedName = this.checkingNameInState(name);
    if (checkedName) {
      alert('this name is already available');
      return true;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), name, number }, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(el => el.id !== contactId),
      };
    });
  };

  checkingNameInState = newName => {
    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );
  };

  handleFilterChangeInState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <Box
        p="20px"
        ml="auto"
        mr="auto"
        mt="30px"
        width="500px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        boxShadow="0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
     0px 2px 1px rgba(0, 0, 0, 0.2)"
      >
        <Box>
          <h2>Phonebook</h2>
          <ContactForm addContacts={this.addContacts} />
        </Box>
        <Box mt="20px">
          <h2>Contacts</h2>
          <Filter
            handleChange={this.handleFilterChangeInState}
            filterStateData={this.state.filter}
          />
          <ContactList
            filterContacts={filterContacts}
            deleteContact={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}

export default App;
