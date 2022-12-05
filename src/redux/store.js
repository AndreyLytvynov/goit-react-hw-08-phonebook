const { createSlice, configureStore } = require('@reduxjs/toolkit');

const contactsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact(state, action) {
      //   state.push(action.payload);
      if (state.find(el => action.payload.name === el.name)) {
        alert('Please enter other name');
        return state;
      }
      return [...state, action.payload];
    },
    removeContact(state, action) {
      return state.filter(contact => {
        return action.payload !== contact.id;
      });
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
const contactsReducer = contactsSlice.reducer;

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});
