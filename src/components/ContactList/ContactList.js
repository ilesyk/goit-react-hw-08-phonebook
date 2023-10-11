import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem } from './ContactList.styled';
import { selectContacts, selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);

  if (!contacts.length || !contacts) {
    return <div>PhoneBook is empty</div>;
  }
  return (
    <List>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </ListItem>
        );
      })}
    </List>
  );
};
