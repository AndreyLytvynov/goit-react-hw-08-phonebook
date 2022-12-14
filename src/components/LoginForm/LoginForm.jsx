import { Box } from 'components/Box';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';
import { LoginFormStyled } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
      <Box display="flex" mt="10px" justifyContent="center" alignItems="center">
        <p>First time on the site? </p>
        <Link to="/register">Sign up</Link>
      </Box>
    </LoginFormStyled>
  );
};

export default LoginForm;
