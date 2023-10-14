import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import * as Yup from 'yup';
import { FormWrap } from './ContactForm.styled';
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
      <Typography sx={{ marginBottom: '15px' }} variant="h4">
        Add Contact
      </Typography>
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
        {formik => (
          <FormWrap>
            <TextField
              id="name"
              name="name"
              label="Name"
              size="small"
              type="text"
              placeholder="Add contact name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="number"
              name="number"
              label="Number"
              size="small"
              type="text"
              placeholder="Example: 123-45-67"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <Button size="medium" variant="contained" type="submit">
              Add contact
            </Button>
          </FormWrap>
        )}
      </Formik>
    </>
  );
};
