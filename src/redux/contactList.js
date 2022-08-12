import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: JSON.parse(localStorage.getItem('contacts')) || [],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, { payload: contact }) => {
            state.items = [...state.items, contact];
        },
        deleteContact: (state, { payload: contactID }) => {
            state.items = state.items.filter(item => item.id !== contactID);
        },
    },
});

export const { setContacts, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;