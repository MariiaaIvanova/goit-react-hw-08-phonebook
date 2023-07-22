import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
