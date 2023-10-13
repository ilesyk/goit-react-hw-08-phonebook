import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppBar position="static" sx={{  marginBottom: '25px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </AppBar>
  );
};
