import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectVisibleContacts);

  if (!contacts.length || !contacts) {
    return <div>PhoneBook is empty</div>;
  }
  return (
    <Box sx={{ marginTop:'15px',display:'flex', flexDirection:'column', gap:'10px'}}>
      {filteredContacts.map(contact => {
        return (
          <Card
            sx={{ minWidth: 275, backgroundColor: '#e6ecff' }}
            key={contact.id}
          >
            <CardContent>
              <Typography variant="h5" sx={{ marginBottom: '10px' }}>
                Name: {contact.name}
              </Typography>
              <Typography variant="body2">Number: {contact.number}</Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                type="button"
                sx={{ marginLeft: 'auto' }}
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};
