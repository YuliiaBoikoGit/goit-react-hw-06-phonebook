import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    number: '',
};

export const contactSlice = createSlice({
    name: 'contactForm',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setNumber: (state, action) => {
            state.number = action.payload;
        },
    },
});

export const { setName, setNumber } = contactSlice.actions;

export default contactSlice.reducer;