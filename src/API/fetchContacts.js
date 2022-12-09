import axios from 'axios';

axios.defaults.baseURL =
  'https://6391c7c6b750c8d178cd152a.mockapi.io/api/contacts';

export async function getContact() {
  try {
    const response = await axios.get();
    if (response.status === 200) return response;
  } catch (error) {
    return error;
  }
}

export async function deleteContact(id) {
  try {
    const response = await axios.delete(`/${id}`);
    if (response.status === 200) return response;
  } catch (error) {
    return error;
  }
}

export async function addContact(contact) {
  try {
    const response = await axios.post('/', contact);
    if (response.status === 201) return response;
  } catch (error) {
    return error;
  }
}
