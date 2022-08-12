import { configureStore } from "@reduxjs/toolkit";
import filter from './filter';
import contacts from './contactList';
import contactForm from './contactForm';

export const store = configureStore({
    reducer: {
        filter,
        contacts,
        contactForm,
    },
});