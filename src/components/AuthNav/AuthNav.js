import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
      <NavLink to="/register">
        <Button sx={{ color: '#fff' }} color="inherit">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button sx={{ color: '#fff' }} color="inherit">
          Log In
        </Button>
      </NavLink>
    </Box>
  );
};
