import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Contacts from '../pages/Contacts';
// import SharedLayout from './SharedLayout/SharedLayout';

import { currentUser } from 'redux/auth/authOperation';
import PrivateRoute from './Routs/PrivateRoute';
import PublicRoute from './Routs/PublicRoute';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

const App = () => {
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return !isRefreshing ? (
    <Suspense fallback={false}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts">
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts">
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  ) : (
    <></>
  );
};

export default App;
