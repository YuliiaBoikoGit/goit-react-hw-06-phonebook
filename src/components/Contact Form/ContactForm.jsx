import { setContacts } from "redux/contacts";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Form, Input, Label, Button } from "./ContactForm.styled";

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    const handleNameChange = event => setName(event.target.value);
    const handleNumberChange = event => setNumber(event.target.value);

    const reset = () => {
        setName('');
        setNumber('');
    };

    const formSubmitHandler = event => {
        event.preventDefault();

        const existingContact = contacts.find(contact => contact.name.toLowerCase() === event.target.name.value.toLowerCase());

        if (existingContact) {
            alert(`${event.target.name} is already in contacts`);
        } else {
            const contact = {
                name: event.target.name.value,
                number: event.target.number.value,
                id: nanoid(),
            };

            dispatch(setContacts(contact));    
        };
        
        reset();
    };

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    return (
        <Form onSubmit={formSubmitHandler}>
            <Label>
                Name <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleNameChange}
                />
            </Label>
            <Label>
                Number <Input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleNumberChange}
                />
            </Label>
            <Button type="submit">Add Contact</Button>
        </Form>
    );
};