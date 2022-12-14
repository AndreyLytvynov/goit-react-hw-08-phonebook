import { Box } from 'components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { BiLogOut } from 'react-icons/bi';
import { GoSignIn } from 'react-icons/go';
import { FaRegEdit, FaUser } from 'react-icons/fa';

import {
  ButtonStyled,
  HeaderStyled,
  ButtonLinkStyled,
  UserNameStyled,
} from './AppBar.styled';

export const AppBar = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);

  return (
    <HeaderStyled>
      <Box display="flex" justifyContent=" flex-end">
        {/* {isLoggedIn && (
          <ButtonLinkStyled to="/contacts">Contacts</ButtonLinkStyled>
        )} */}
        {isLoggedIn ? (
          <Box display="flex" alignItems="center">
            <UserNameStyled>
              <FaUser />
              <span>{userName}</span>
            </UserNameStyled>
            <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
              {/* <span>log-out</span> */}
              <BiLogOut />
            </ButtonStyled>
          </Box>
        ) : (
          <Box display="flex">
            <ButtonLinkStyled to="/login">
              <span>Sign in</span>
              <GoSignIn />
            </ButtonLinkStyled>
            <ButtonLinkStyled to="/register">
              <span>Sign up</span>
              <FaRegEdit />
            </ButtonLinkStyled>
          </Box>
        )}
      </Box>
    </HeaderStyled>
  );
};
