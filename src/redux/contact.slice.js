import { createSlice, current } from '@reduxjs/toolkit'
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
  name: 'ali',
  lastName: 'khodaBandeh',
  age: 21,
  city: 'tehran',
  email: 'rezaei@example.com',
  favorite: 'unFavorite'
},
{
  id: 4,
  name: 'elham',
  lastName: 'ahmadi',
  age: 21,
  city: 'tehran',
  email: 'rezaei@example.com',
  favorite: 'unFavorite'
},
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const payload = action.payload;
      state.push(payload);
    },
    deleteContact: (state, action) => {
      const index = state.findIndex(item => item.id == action.payload);
      state.splice(index, 1);
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

export const { addContact, deleteContact, toggleFavorite } = contactSlice.actions

export default contactSlice.reducer