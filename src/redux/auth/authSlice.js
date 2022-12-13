import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';
import { register, logIn, logOut, currentUser } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        ///currentUser
      })
      .addCase(currentUser.pending, (state, { payload }) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
