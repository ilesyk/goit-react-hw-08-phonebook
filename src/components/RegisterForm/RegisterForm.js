import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          size="small"
          type="text"
          name="name"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          type="password"
          name="password"
        />
        <Button size="medium" variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </form>
  );
};
