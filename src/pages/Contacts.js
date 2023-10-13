import { Typography } from "@mui/material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactsList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts()  {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
      <div>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <ContactForm />
        <Typography sx={{ marginTop:'25px', marginBottom:'15px'}} variant="h4">Your Contacts</Typography>
        <Filter />
        {isLoading & !error ? <b>LOADING...</b> : <ContactsList />}
      </div>
    );
}