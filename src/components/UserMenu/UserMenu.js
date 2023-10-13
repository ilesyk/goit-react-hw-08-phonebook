import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Typography variant="h6" component="div" sx={{ fontSize:'14px' }}> Welcome, {user.name}</Typography>
      <Button
        sx={{ height: '36.5px' }}
        color="inherit"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};

