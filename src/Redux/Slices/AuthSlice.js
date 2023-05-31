import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: null,
    email: null,
    uid: null,
    isLoggedIn: false,
  },

  reducers: {
    logIn(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.name = null;
      state.email = null;
      state.uid = null;
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

export const authInfo = (state) => state.auth;
