import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { Navigate } from 'react-router-dom';
import { Box } from 'components/Box';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <Box mt="20px">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </Box>
  );
};

export default Login;
