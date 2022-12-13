import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Contacts from '../pages/Contacts';
// import SharedLayout from './SharedLayout/SharedLayout';

import { currentUser } from 'redux/auth/authOperation';
import PrivateRoute from './Routs/PrivateRoute';

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
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Contacts />} />
          <Route path="contacts" element={<Contacts />} /> */}

          <PrivateRoute path="contacts">
            {/* <Route index element={<Contacts />} /> */}
            <Contacts />
          </PrivateRoute>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Suspense>
  ) : (
    <div></div>
  );
};

export default App;
