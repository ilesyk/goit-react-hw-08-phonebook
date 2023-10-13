import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavLink to="/">
        <Button sx={{ color: '#fff' }} color="inherit">
          Home
        </Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Button sx={{ color: '#fff' }} color="inherit">
            Contacts
          </Button>
        </NavLink>
      )}
    </nav>
  );
};
