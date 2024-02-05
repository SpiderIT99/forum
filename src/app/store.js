import {
  configureStore,
  createListenerMiddleware,
  isRejected,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import alertsReducer, {
  addAlert as addAlertReducer,
} from "../features/alerts/alertSlice";
import { formatAlert } from "../features/alerts/helpers";
import authReducer from "../features/auth/authSlice";

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isRejected,
  effect: async (action, listenerApi) => {
    const error = action.payload;
    if (error) listenerApi.dispatch(addAlertReducer(formatAlert(error)));
  },
});

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    alerts: alertsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .prepend(listenerMiddleware.middleware),
});
