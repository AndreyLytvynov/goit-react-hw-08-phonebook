import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getContact, deleteContact, addContact } from 'API/fetchContacts';

axios.defaults.baseURL =
  'https://6391c7c6b750c8d178cd152a.mockapi.io/api/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await getContact();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',

  async (id, { thunkAPI, dispatch }) => {
    try {
      const response = await deleteContact(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',

  async (contact, { thunkAPI, dispatch }) => {
    try {
      const response = await addContact(contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
