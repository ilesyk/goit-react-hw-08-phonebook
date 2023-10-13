import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import * as Yup from 'yup';
import { FormWrap, ErrMsg } from './ContactForm.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { Button, TextField, Typography } from '@mui/material';

const quizSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore Artagnan'
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  function addNewContact(values) {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contacts.`);
    }
    return dispatch(addContact(values));
  }
  return (
    <>
      <Typography sx={{marginBottom: '15px'}} variant="h4">Add Contact</Typography>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={quizSchema}
        onSubmit={(values, actions) => {
          addNewContact(values);
          actions.resetForm();
        }}
      >
        <FormWrap>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            type="text"
            name="name"
          >
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Add contact name"
            />
          </TextField>
          <ErrMsg name="name" component="div" />
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            size="small"
            type="text"
            name="name"
          >
            <Field
              id="number"
              name="number"
              type="text"
              placeholder="Example: 123-45-67"
            />
          </TextField>
          <ErrMsg name="number" component="div" />
          <Button size="medium" variant="contained" type="submit">
            Add contact
          </Button>
        </FormWrap>
      </Formik>
    </>
  );
};
