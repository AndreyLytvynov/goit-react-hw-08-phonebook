import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { Box } from '../components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsSlice/operation';
import { Oval } from 'react-loader-spinner';

const Contacts = () => {
  const contactsFromStore = useSelector(state => state.contacts.contacts.items);
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const filterFromStore = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    return contactsFromStore.filter(el =>
      el.name.toLowerCase().includes(filterFromStore.toLowerCase())
    );
  };

  return (
    <Box
      p="20px"
      ml="auto"
      mr="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        <Box as="h2" textAlign="center">
          Phonebook
        </Box>
        <ContactForm />
      </Box>
      <Box mt="20px">
        <Box display="flex" alignItems="center">
          {contactsFromStore.length !== 0 ? (
            <h2>Your contacts:</h2>
          ) : (
            <h2>Please add contact:</h2>
          )}
          {isLoading && <Oval wrapperClass="loader" height={20} width={20} />}
        </Box>

        {contactsFromStore.length > 1 && <Filter />}
        <ContactList filterContacts={getFilterContacts()} />
      </Box>
      <Box mt="20px"></Box>
    </Box>
  );
};

export default Contacts;
