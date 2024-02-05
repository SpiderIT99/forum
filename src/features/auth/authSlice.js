import { createSlice } from "@reduxjs/toolkit";

// TODO: add real authentication when the backend is ready
// const token = sessionStorage.getItem("token") || null;
// const initialState = {
//   user: token ? jwt_decode(token) : null,
// };
// temporary
const token = sessionStorage.getItem("token") || null;
const initialState = {
  user: token ? { username: token.username } : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      // TODO: add real authentication when the backend is ready
      // state.user = jwt_decode(action.payload.data.access_token);
      state.user = {
        username: action.payload.username,
      }; // temporary
    },
    removeCredentials: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
