import { Box } from 'components/Box';
import { LoginFormStyled } from 'components/LoginForm/LoginForm.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperation';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
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
    <Box mt="20px">
      <LoginFormStyled onSubmit={onSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
        <Box
          display="flex"
          mt="10px"
          justifyContent="center"
          alignItems="center"
        >
          <p>Already have an account?</p>
          <Link to="/login">Sign in</Link>
        </Box>
      </LoginFormStyled>
    </Box>
  );
};

export default RegisterForm;
