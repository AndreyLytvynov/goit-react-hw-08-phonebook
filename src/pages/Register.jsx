import { Box } from 'components/Box';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { register } from 'redux/auth/authOperation';

const Register = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Box mt="20px">
      {' '}
      <form onSubmit={onSubmit} autoComplete="off">
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
      </form>
    </Box>
  );
};

export default Register;
