import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Box } from 'components/Box';
import LoginForm from 'components/LoginForm/LoginForm';

const Login = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <Box mt="20px">
      <LoginForm />
    </Box>
  );
};

export default Login;
