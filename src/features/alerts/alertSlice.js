import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    addAlert: (state, action) => {
      if (state.length === 5) state.splice(0, 1);
      state.push(action.payload);
    },
    removeAlert: (state, action) => {
      const index = state.findIndex(
        (alert) => alert.timestamp === action.payload
      );
      if (index !== -1) state.splice(index, 1);
    },
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;

export const selectAlerts = (state) => state.alerts;

export default alertSlice.reducer;
