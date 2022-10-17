import { createSlice,current  } from '@reduxjs/toolkit'
const initialState = [{
    id: 1,
    name: 'mina',
    lastName: 'alaei',
    age: 21,
    city: 'esfahan',
    email: 'nimai@example.com',
    favorite: 'favorite'
  },
  {
    id: 2,
    name: 'nima',
    lastName: 'rezaei',
    age: 21,
    city: 'tehran',
    email: 'rezaei@example.com',
    favorite: 'unFavorite'
  },
  {
    id: 3,
    name: 'nima',
    lastName: 'rezaei',
    age: 21,
    city: 'tehran',
    email: 'rezaei@example.com',
    favorite: 'unFavorite'
  },
  {
    id: 4,
    name: 'nima',
    lastName: 'rezaei',
    age: 21,
    city: 'tehran',
    email: 'rezaei@example.com',
    favorite: 'unFavorite'
  },];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state , action) => {
        const payload = action.payload;
        const newContact = {
            id: payload.id,
            name: payload.name,
            lastName: payload.lastName,
            age: payload.age,
            city: payload.city,
            email: payload.email,
            favorite: payload.favorite
        }
        state.push(newContact);
    },
    deleteContact: (state, action) => {
      console.log(action.payload.id);
      //state = state.filter((item) => item.id !== action.payload.id);
      console.log(current(state));
    },
    toggleFavorite: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      const index = state.findIndex((p) => p.id === action.payload);
      if (item.favorite === 'favorite') {
        state[index].favorite = 'unFavorite';
      } else {
        state[index].favorite = 'favorite';
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, toggleFavorite } = contactSlice.actions

export default contactSlice.reducer