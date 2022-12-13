// import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';

export const AppBar = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <header>
      <Box display="flex" justifyContent="space-around">
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
        {isLoggedIn ? (
          <button type="button" onClick={() => dispatch(logOut())}>
            Logout
          </button>
        ) : (
          <Box>
            <Box as={NavLink} mr="20px" to="/login">
              Login
            </Box>
            <Box as={NavLink} to="/register">
              Register
            </Box>
          </Box>
        )}
      </Box>
    </header>
  );
};
